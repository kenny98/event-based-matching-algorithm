module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function received a request to request a ride.');

    var status;
    const lat = (req.query.lat || (req.body && req.body.lat)); // Latitude
    const lon = (req.query.lon || (req.body && req.body.lon)); // Longitude
    const num_riders = (req.query.riders || (req.body && req.body.riders)); // Number of Riders
    var responseMessage;

    if (lat == undefined || lon == undefined) {
        status =  400;
        responseMessage = "Latitude and Longitude must be passed in request body!";
    }
    else {
        status = 200;
        responseMessage = "Latitude is: " + lat.toString() + ", Longitude is: " + lon.toString();
    }

    // Use this when calling sub functions context.log(context['invocationId']);
    getNearbyDrivers(context['invocationId']);
    // Call 3 sub functions using API calls
    // Get nearby drivers
    function getNearbyDrivers(invocationId) {
        context.log('Ride Request function is running get nearby drivers function on ' + invocationId);
        const Http = new XMLHttpRequest();
        const url = "http://localhost:7071/api/nearby-drivers";
        Http.open("GET", url);
        // requestbody = {};
        Http.send()
        Http.onreadystatechange=(e)=>{
            console.log(Http.responseText)
        }
    }




    context.res = {
        status: status,
        body: responseMessage
    };
}
