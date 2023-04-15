/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 * 
 * Before running this sample, please:
 * - create a Durable activity function (default name is "Hello")
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your 
 *    function app in Kudu
 */

const df = require("durable-functions");
const haversine = require("haversine-distance");

module.exports = df.orchestrator(function* (context) {
    // Get Latitude, Longitude and Number of Riders from context object
    lat = context.df.getInput().lat
    lon = context.df.getInput().lon
    riders = context.df.getInput().riders
    const outputs = [];

    const get_driver_info = context.df.callActivity("driver-info", riders);  // Get driver info - pass in number of riders
    const driver_info = yield get_driver_info;
    if (driver_info.length == 0) {
        outputs.push("No drivers available for number of passengers!")
    }
    else {
        // Filter Drivers based on Enough Seat Availability
        filtered_drivers = []
        for (i in driver_info) {
            filtered_drivers.push(driver_info[i]._id);
        }
        // Use Filtered Drivers to return only filtered driver ratings and locations
        const get_driver_rating = context.df.callActivity("driver-rating", filtered_drivers);
        const get_driver_location = context.df.callActivity("driver-location", filtered_drivers);
        const driver_rating = yield get_driver_rating;
        const driver_location = yield get_driver_location;
        const final_drivers = []
        for (i in driver_location) {
            // compute haversine, driver distance from rider
            driverlat = driver_location[i].latitude;
            driverlon = driver_location[i].longitude;
            var hav = haversine([lat, lon], [driverlat, driverlon]);
            // append ratings, location, haversine to final drivers object
            final_drivers.push(driver_location[i]);
            final_drivers[i].haversine = hav/1000;
            final_drivers[i].rating = driver_rating[i].rating;
            // Use location and rating to get a recommendation for driver
            final_drivers[i].matrix = (1/driver_rating[i].rating) * (hav/1000);
        }

        // Sort Final Drivers, Use Matrix to determine which driver to select
        final_drivers.sort(function(a, b) {
            var x = a['matrix'];
            var y = b['matrix'];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });

        // Transfer rest of driver info onto final driver selection
        for (i in driver_info) {
            if (driver_info[i]._id == final_drivers[0]._id) {
                final_drivers[0].name = driver_info[i].name;
                final_drivers[0].age = driver_info[i].age;
                final_drivers[0].gender = driver_info[i].gender;
                final_drivers[0].email = driver_info[i].email;
                final_drivers[0].phone = driver_info[i].phone;
                final_drivers[0].registered = driver_info[i].registered;
                final_drivers[0].seats = driver_info[i].seats;
            }
        }

        // return final selected driver to user
        outputs.push(final_drivers[0]);

    }

    return outputs; // return output of orchestration to user
});