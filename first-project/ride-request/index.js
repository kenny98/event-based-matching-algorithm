const request = require("request");
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function received a request to request a ride.');
    const lat = (req.query.lat || (req.body && req.body.lat)); // Latitude
    const lon = (req.query.lon || (req.body && req.body.lon)); // Longitude
    const num_riders = (req.query.riders || (req.body && req.body.riders)); // Number of Riders
    var status;
    var responseMessage;

    if (lat == undefined || lon == undefined || num_riders == undefined) {
        status =  400;
        responseMessage = "Latitude, Longitude and Number of Riders must be passed in the request body!";
    }
    else {
        status = 200;
        responseMessage = request('http://localhost:7071/api/nearby-drivers');
        //responseMessage = "Latitude is: " + lat.toString() + ", Longitude is: " + lon.toString();
        
        // Use this when calling sub functions context.log(context['invocationId']);
        // Simulated Call to Retrieve Drivers
        drivers_json =
        {
            "1": {
              "name": "Jon Doe",
              "vehicle": "2021 Nissan Leaf",
              "seats": "4",
              "rating": "5",
              "location": {
                "lat": "10",
                "lon": "10"
              }
            },
            "2": {
              "name": "Jane Doe",
              "vehicle": "2023 Toyota Corolla",
              "seats": "5",
              "rating": "4",
              "location": {
                "lat": "20",
                "lon": "20"
              }
            },
            "3": {
              "name": "Mike Jordan",
              "vehicle": "2022 Honda Civic",
              "seats": "6",
              "rating": "3",
              "location": {
                "lat": "30",
                "lon": "30"
              }
            },
            "4": {
              "name": "Tom Ford",
              "vehicle": "2020 Ford Ranger",
              "seats": "5",
              "rating": "4",
              "location": {
                "lat": "40",
                "lon": "40"
              }
            },
            "5": {
              "name": "Max Wilson",
              "vehicle": "2023 Hyundai Tucson",
              "seats": "7",
              "rating": "5",
              "location": {
                "lat": "43",
                "lon": "44"
              }
            }
        }
        // Call 3 sub functions using API calls
        // Get nearby drivers, returns 3 nearest drivers

        // Get vehicle info request
        // Get average rating request
    }

    context.res = {
        status: status,
        body: responseMessage
    };
}
