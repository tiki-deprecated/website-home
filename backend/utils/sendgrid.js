const sendgrid = require("@sendgrid/client");
const helpers = require("./helpers.js");

module.exports = {
  update(params, callback) {
    validateEmail(params.email, function (err, data) {
      if (
        data &&
        data.body &&
        data.body.result &&
        helpers.is2xx(data.code) &&
        data.body.result.verdict !== "Invalid"
      ) {
        putContact(params, callback);
      } else callback(err, { code: 400 });
    });
  },
};

function putContact(params, callback) {
  let customFields = {};
  if (params.referrer != null) customFields.e1_T = params.referrer;
  if (params.participate != null)
    customFields.e3_T = params.participate.toString();
  if (params.confirmed != null) customFields.e8_T = params.confirmed.toString();

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  sendgrid
    .request({
      body: {
        contacts: [
          {
            email: params.email,
            custom_fields: customFields,
          },
        ],
      },
      method: "PUT",
      url: "/v3/marketing/contacts",
    })
    .then(([response, body]) => {
      callback(null, { code: response.statusCode, body });
    })
    .catch(function (error) {
      callback(error, null);
    });
}

function validateEmail(email, callback) {
  sendgrid.setApiKey(process.env.SENDGRID_API_VALIDATION_KEY);
  sendgrid
    .request({
      body: { email: email },
      method: "POST",
      url: "/v3/validations/email",
    })
    .then(([response, body]) => {
      callback(null, { code: response.statusCode, body });
    })
    .catch(function (error) {
      callback(error, null);
    });
}
