const df = require("durable-functions");

module.exports = async function (context, req) {
    const client = df.getClient(context);
    const instanceId = await client.startNew(req.params.functionName, undefined, req.body);

    // Get Latitude, Longitude and Number of Riders from Client, POST Request only
    const lat =  (req.body && req.body.lat);
    const lon = (req.body && req.body.lon);
    const riders = (req.body && req.body.riders);

    context.log(`Started orchestration with ID = '${instanceId}'.`);

    return client.createCheckStatusResponse(context.bindingData.req, instanceId);
};