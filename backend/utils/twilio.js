const crypto = require("crypto");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const signupServiceId = process.env.TWILIO_SIGNUP_SERVICE_ID;
const participateServiceId = process.env.TWILIO_PARTICIPATE_SERVICE_ID;
const twilio = require("backend/utils/twilio")(accountSid, authToken);

module.exports = {
  signup(params, callback) {
    buildBinding(params, function (err, data) {
      if (err) callback(err, { success: false });
      else send(data, signupServiceId, callback);
    });
  },
  participate(params, callback) {
    buildBinding(params, function (err, data) {
      if (err) callback(err, { success: false });
      else send(data, participateServiceId, callback);
    });
  },
};

function hash(address) {
  const hash = crypto.createHash("sha512");
  const data = hash.update(address, "utf-8");
  return data.digest("hex");
}

function buildBinding(params, callback) {
  twilio.lookups
    .phoneNumbers(params.contact)
    .fetch()
    .then((phoneNumber) => {
      callback(null, {
        identity: hash(phoneNumber.phoneNumber),
        bindingType: "sms",
        address: phoneNumber.phoneNumber,
        tag: params.code,
      });
    })
    .catch((error) => callback(error, {}));
}

function send(bindings, serviceId, callback) {
  twilio.notify
    .services(serviceId)
    .bindings.create(bindings)
    .then((binding) => callback(null, { success: true }))
    .catch((error) => callback(error, { success: false }))
    .done();
}
