const sendgrid = require("@sendgrid/client");
const helpers = require("./helpers.js");

const USER_LIST_ID = "db65441d-ce52-4ec8-8472-cae7cdaebd19";

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
  count(callback) {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    sendgrid
      .request({
        body: {},
        method: "GET",
        url: "/v3/marketing/lists/" + USER_LIST_ID + "/contacts/count",
      })
      .then(([response, body]) => {
        callback(null, { code: response.statusCode, body });
      })
      .catch(function (error) {
        callback(error, null);
      });
  },
};

function putContact(params, callback) {
  let customFields = {};
  customFields.e9_T = encodeURIComponent(params.email);
  if (params.referrer != null) customFields.e1_T = params.referrer;
  if (params.participate != null)
    customFields.e3_T = params.participate.toString();
  if (params.confirmed != null) customFields.e8_T = params.confirmed.toString();

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
  sendgrid
    .request({
      body: {
        list_ids: [USER_LIST_ID],
        contacts: [
          {
            email: params.email,
            address_line_2: params.referrer,
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
