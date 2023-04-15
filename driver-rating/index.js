// Driver Rating Function

module.exports = async function (context) {
  drivers = [
    {
      "_id": "6434387b559ca8a9ee0c62d2",
      "rating": 3
    },
    {
      "_id": "6434387bcb2ed1929c80c3e8",
      "rating": 2
    },
    {
      "_id": "6434387badb67bd3c4ca9bbe",
      "rating": 2
    },
    {
      "_id": "6434387ba68412cdfe3b290a",
      "rating": 5
    },
    {
      "_id": "6434387b1e5008ae5b30f987",
      "rating": 1
    },
    {
      "_id": "6434387b7781e82b74490acc",
      "rating": 3
    },
    {
      "_id": "6434387bd1124b74092c3048",
      "rating": 4
    },
    {
      "_id": "6434387b870fe645393313a0",
      "rating": 2
    },
    {
      "_id": "6434387b5b71723b38bdf1ef",
      "rating": 5
    },
    {
      "_id": "6434387b743a93ef80485bbf",
      "rating": 4
    },
    {
      "_id": "6434387b510d6f143ed0e53e",
      "rating": 5
    },
    {
      "_id": "6434387b350a415a01bcb4e4",
      "rating": 2
    },
    {
      "_id": "6434387bfe642e995329e17c",
      "rating": 3
    },
    {
      "_id": "6434387bcaa9c346ba5a0078",
      "rating": 5
    },
    {
      "_id": "6434387b97627f34f1763259",
      "rating": 2
    },
    {
      "_id": "6434387b3d9a9ebbdca9a186",
      "rating": 3
    },
    {
      "_id": "6434387b786ca6e0164236e0",
      "rating": 5
    },
    {
      "_id": "6434387b989143916fba1ce0",
      "rating": 2
    },
    {
      "_id": "6434387bf6ca9b11fd42f1d7",
      "rating": 3
    },
    {
      "_id": "6434387b8521c373f6c98852",
      "rating": 3
    }
]
    filtered_drivers = []
    for (i in drivers) {
      for (j in context.bindings.name) {
        if (drivers[i]._id == context.bindings.name[j]) {
          filtered_drivers.push(drivers[i]); // Only return drivers where ID matched
        }
      }
    }
    // Return drivers with enough car seating for number of riders
    return (filtered_drivers);
};