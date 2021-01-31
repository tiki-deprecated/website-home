const AWS = require("aws-sdk");
const pinpointRef = new AWS.Pinpoint({ region: process.env.region });
const applicationId = "signup";

module.exports = {
  signup(params, callback) {
    const pinpointParams = {
      ApplicationId: applicationId,
      EndpointId: params.contact,
      EndpointRequest: {
        ChannelType: params.type,
        Address: params.contact,
        OptOut: "NONE",
        Attributes: {
          Code: params.code,
          Participate: false,
        },
      },
    };
    updateEndpoint(pinpointParams, callback);
  },
};

function updateEndpoint(params, callback) {
  pinpointRef.updateEndpoint(params, function (err, data) {
    if (err) callback(err, { success: false });
    else callback(null, { success: true });
  });
}
