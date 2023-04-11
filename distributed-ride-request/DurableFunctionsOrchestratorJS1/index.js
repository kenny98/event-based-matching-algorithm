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
        filtered_drivers = []
        for (i in driver_info) {
            filtered_drivers.push(driver_info[i]._id);
        }
        const get_driver_rating = context.df.callActivity("driver-rating", filtered_drivers);
        const get_driver_location = context.df.callActivity("driver-location", filtered_drivers);
        const driver_rating = yield get_driver_rating;
        const driver_location = yield get_driver_location;

        // Use location and rating to get a recommendation for driver
        const matrix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
    
    //outputs.push(yield context.df.callActivity("Hello1", "Get Average Driver Rating")); // Get average driver rating
    //const ratings = context.df.callActivity("driver-rating");
    //outputs.push(yield context.df.callActivity("Hello1", "Get Nearest Drivers")); // Get nearest drivers

    return outputs; // return output of orchestration to user
});