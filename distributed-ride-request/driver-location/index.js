// Driver Location Function

module.exports = async function (context) {
  drivers = [
    {
      "_id": "6434387b559ca8a9ee0c62d2",
      "isActive": false,
      "latitude": -71.115074,
      "longitude": -40.080032
    },
    {
      "_id": "6434387bcb2ed1929c80c3e8",
      "isActive": false,
      "latitude": -84.188814,
      "longitude": 8.151123
    },
    {
      "_id": "6434387badb67bd3c4ca9bbe",
      "isActive": true,
      "latitude": -73.597724,
      "longitude": 64.933289
    },
    {
      "_id": "6434387ba68412cdfe3b290a",
      "isActive": false,
      "latitude": 48.990564,
      "longitude": -10.110288
    },
    {
      "_id": "6434387b1e5008ae5b30f987",
      "isActive": true,
      "latitude": 34.33888,
      "longitude": -57.268158
    },
    {
      "_id": "6434387b7781e82b74490acc",
      "isActive": false,
      "latitude": -29.899775,
      "longitude": -48.658118
    },
    {
      "_id": "6434387bd1124b74092c3048",
      "isActive": false,
      "latitude": -30.425963,
      "longitude": 173.250389
    },
    {
      "_id": "6434387b870fe645393313a0",
      "isActive": true,
      "latitude": 68.205577,
      "longitude": -48.356703
    },
    {
      "_id": "6434387b5b71723b38bdf1ef",
      "isActive": true,
      "latitude": -73.578974,
      "longitude": -141.577292
    },
    {
      "_id": "6434387b743a93ef80485bbf",
      "isActive": false,
      "latitude": 15.309971,
      "longitude": 168.381965
    },
    {
      "_id": "6434387b510d6f143ed0e53e",
      "isActive": true,
      "latitude": 65.543355,
      "longitude": 14.325072
    },
    {
      "_id": "6434387b350a415a01bcb4e4",
      "isActive": false,
      "latitude": -61.772296,
      "longitude": 124.042276
    },
    {
      "_id": "6434387bfe642e995329e17c",
      "isActive": false,
      "latitude": 15.887985,
      "longitude": -104.669652
    },
    {
      "_id": "6434387bcaa9c346ba5a0078",
      "isActive": false,
      "latitude": 21.159429,
      "longitude": 33.993029
    },
    {
      "_id": "6434387b97627f34f1763259",
      "isActive": false,
      "latitude": 21.721478,
      "longitude": 124.749882
    },
    {
      "_id": "6434387b3d9a9ebbdca9a186",
      "isActive": false,
      "latitude": -47.484611,
      "longitude": 128.543544
    },
    {
      "_id": "6434387b786ca6e0164236e0",
      "isActive": true,
      "latitude": -29.078988,
      "longitude": 170.803793
    },
    {
      "_id": "6434387b989143916fba1ce0",
      "isActive": false,
      "latitude": -39.44393,
      "longitude": 152.852763
    },
    {
      "_id": "6434387bf6ca9b11fd42f1d7",
      "isActive": true,
      "latitude": 58.295335,
      "longitude": -174.926441
    },
    {
      "_id": "6434387b8521c373f6c98852",
      "isActive": true,
      "latitude": 65.777455,
      "longitude": -48.452571
    }
]
  filtered_drivers = []

  for (i in drivers) {
    for (j in context.bindings.name) {
      if (drivers[i]._id == context.bindings.name[j]) {
        filtered_drivers.push(drivers[i]); // Only return drivers where ID matched, calculate haversine for these drivers
      }
    }
  }

  // Return drivers with enough car seating for number of riders
  return (filtered_drivers);
};