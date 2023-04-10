module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function received a request to get nearby drivers.');

    // Get Lat and Lon from other Request
    const lat = (req.query.lat || (req.body && req.body.lat)); // Latitude
    const lon = (req.query.lon || (req.body && req.body.lon)); // Longitude

    // simulated locations of drivers
    json = {
        "1": {
          "location": {
            "lat": 10,
            "lon": 10
          }
        },
        "2": {
          "location": {
            "lat": 20,
            "lon": 20
          }
        },
        "3": {
          "location": {
            "lat": 30,
            "lon": 30
          }
        },
        "4": {
          "location": {
            "lat": 40,
            "lon": 40
          }
        },
        "5": {
          "location": {
            "lat": 43,
            "lon": 44
          }
        }
      }

      var returnjson = {};
      for (const prop in json) {
        distfrompassenger = Math.abs((json[prop]["location"]["lat"] + json[prop]["location"]["lon"])
                             - (parseInt(lat) + parseInt(lon)));
        returnjson[prop] = distfrompassenger
        //returnjson.push(json[prop]["location"]["lat"])
      }
      console.log(returnjson)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: json
    };
}
