﻿/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an orchestrator function.
 * 
 * Before running this sample, please:
 * - create a Durable orchestration function
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your
 *   function app in Kudu
 */

module.exports = async function (context) {
  
  drivers = [
    {
      "_id": "6434387b559ca8a9ee0c62d2",
      "isActive": false,
      "age": 30,
      "name": "Darla Mccarthy",
      "gender": "female",
      "email": "darlamccarthy@zuvy.com",
      "phone": "+1 (842) 540-3227",
      "registered": "2022-08-03T01:32:33 +04:00",
      "seats": 2,
    },
    {
      "_id": "6434387bcb2ed1929c80c3e8",
      "isActive": false,
      "age": 58,
      "name": "Bird Tucker",
      "gender": "male",
      "email": "birdtucker@zuvy.com",
      "phone": "+1 (968) 459-3058",
      "registered": "2018-08-02T11:59:59 +04:00",
      "seats": 1,
    },
    {
      "_id": "6434387badb67bd3c4ca9bbe",
      "isActive": true,
      "age": 31,
      "name": "Burch Peterson",
      "gender": "male",
      "email": "burchpeterson@zuvy.com",
      "phone": "+1 (906) 422-2781",
      "registered": "2022-11-07T10:09:39 +04:00",
      "seats": 6,
    },
    {
      "_id": "6434387ba68412cdfe3b290a",
      "isActive": false,
      "age": 40,
      "name": "Olive Bartlett",
      "gender": "female",
      "email": "olivebartlett@zuvy.com",
      "phone": "+1 (974) 462-3037",
      "registered": "2018-10-30T07:53:23 +04:00",
      "seats": 2,
    },
    {
      "_id": "6434387b1e5008ae5b30f987",
      "isActive": true,
      "age": 26,
      "name": "Bean Warner",
      "gender": "male",
      "email": "beanwarner@zuvy.com",
      "phone": "+1 (991) 424-3258",
      "registered": "2022-02-10T10:52:42 +04:00",
      "seats": 6,
    },
    {
      "_id": "6434387b7781e82b74490acc",
      "isActive": false,
      "age": 18,
      "name": "Allyson Aguilar",
      "gender": "female",
      "email": "allysonaguilar@zuvy.com",
      "phone": "+1 (980) 455-2868",
      "registered": "2020-09-08T06:30:30 +04:00",
      "seats": 6,
    },
    {
      "_id": "6434387bd1124b74092c3048",
      "isActive": false,
      "age": 52,
      "name": "Reilly Jackson",
      "gender": "male",
      "email": "reillyjackson@zuvy.com",
      "phone": "+1 (895) 501-2024",
      "registered": "2014-05-10T03:28:50 +04:00",
      "seats": 1,
    },
    {
      "_id": "6434387b870fe645393313a0",
      "isActive": true,
      "age": 49,
      "name": "Hendricks Gallegos",
      "gender": "male",
      "email": "hendricksgallegos@zuvy.com",
      "phone": "+1 (987) 557-2401",
      "registered": "2019-06-04T12:07:12 +04:00",
      "seats": 2,
    },
    {
      "_id": "6434387b5b71723b38bdf1ef",
      "isActive": true,
      "age": 23,
      "name": "Johns Stephens",
      "gender": "male",
      "email": "johnsstephens@zuvy.com",
      "phone": "+1 (883) 514-2544",
      "registered": "2014-05-26T05:02:22 +04:00",
      "seats": 8,
    },
    {
      "_id": "6434387b743a93ef80485bbf",
      "isActive": false,
      "age": 52,
      "name": "Phoebe Rasmussen",
      "gender": "female",
      "email": "phoeberasmussen@zuvy.com",
      "phone": "+1 (917) 436-3072",
      "registered": "2016-08-05T02:33:26 +04:00",
      "seats": 1,
    },
    {
      "_id": "6434387b510d6f143ed0e53e",
      "isActive": true,
      "age": 35,
      "name": "Tisha Berry",
      "gender": "female",
      "email": "tishaberry@zuvy.com",
      "phone": "+1 (955) 487-2827",
      "registered": "2014-04-24T10:52:59 +04:00",
      "seats": 3,
    },
    {
      "_id": "6434387b350a415a01bcb4e4",
      "isActive": false,
      "age": 42,
      "name": "Parks Melton",
      "gender": "male",
      "email": "parksmelton@zuvy.com",
      "phone": "+1 (814) 560-2404",
      "registered": "2018-05-03T08:44:34 +04:00",
      "seats": 8,
    },
    {
      "_id": "6434387bfe642e995329e17c",
      "isActive": false,
      "age": 40,
      "name": "Mason Hicks",
      "gender": "male",
      "email": "masonhicks@zuvy.com",
      "phone": "+1 (942) 451-3289",
      "registered": "2023-03-20T01:09:38 +04:00",
      "seats": 5,
    },
    {
      "_id": "6434387bcaa9c346ba5a0078",
      "isActive": false,
      "age": 20,
      "name": "Meyers Hall",
      "gender": "male",
      "email": "meyershall@zuvy.com",
      "phone": "+1 (994) 529-2953",
      "registered": "2014-03-22T02:11:06 +04:00",
      "seats": 3,
    },
    {
      "_id": "6434387b97627f34f1763259",
      "isActive": false,
      "age": 58,
      "name": "Adrienne Guerra",
      "gender": "female",
      "email": "adrienneguerra@zuvy.com",
      "phone": "+1 (955) 572-2180",
      "registered": "2020-08-15T07:13:10 +04:00",
      "seats": 7,
    },
    {
      "_id": "6434387b3d9a9ebbdca9a186",
      "isActive": false,
      "age": 57,
      "name": "Melanie Lynch",
      "gender": "female",
      "email": "melanielynch@zuvy.com",
      "phone": "+1 (819) 580-3382",
      "registered": "2016-11-22T09:52:09 +04:00",
      "seats": 4,
    },
    {
      "_id": "6434387b786ca6e0164236e0",
      "isActive": true,
      "age": 32,
      "name": "Shepherd Stuart",
      "gender": "male",
      "email": "shepherdstuart@zuvy.com",
      "phone": "+1 (822) 543-3645",
      "registered": "2018-07-12T10:49:46 +04:00",
      "seats": 8,
    },
    {
      "_id": "6434387b989143916fba1ce0",
      "isActive": false,
      "age": 45,
      "name": "Salinas Battle",
      "gender": "male",
      "email": "salinasbattle@zuvy.com",
      "phone": "+1 (915) 596-2622",
      "registered": "2021-04-27T07:56:34 +04:00",
      "seats": 7,
    },
    {
      "_id": "6434387bf6ca9b11fd42f1d7",
      "isActive": true,
      "age": 48,
      "name": "Tessa West",
      "gender": "female",
      "email": "tessawest@zuvy.com",
      "phone": "+1 (929) 579-2051",
      "registered": "2017-02-27T08:17:32 +04:00",
      "seats": 8,
    },
    {
      "_id": "6434387b8521c373f6c98852",
      "isActive": true,
      "age": 33,
      "name": "Tasha Dejesus",
      "gender": "female",
      "email": "tashadejesus@zuvy.com",
      "phone": "+1 (836) 450-3123",
      "registered": "2021-03-14T07:15:59 +04:00",
      "seats": 7,
    }
  ]
  filtered_drivers = []
  for (i in drivers) {
      // Only return drivers where seats greater than or equal to riders
      if (drivers[i].seats >= context.bindings.name) {
          filtered_drivers.push(drivers[i]);
      }
    }

  // Return drivers with enough car seating for number of riders
  return filtered_drivers;
};