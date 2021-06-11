"use strict";

const helpers = require("../../utils/helpers.js");
const sendgrid = require("../../utils/sendgrid");

const NUM_SMS_SIGNUPS_IN_TWILIO = 11476;

exports.handler = function (event, context, callback) {
  sendgrid.count(function (err, data) {
    if (err) console.log(err, err.stack);
    if (data && data.body && helpers.is2xx(data.code)) {
      callback(null, {
        statusCode: "200",
        headers: helpers.corsHeaders(),
        body: JSON.stringify({
          total: data.body.contact_count + NUM_SMS_SIGNUPS_IN_TWILIO,
        }),
      });
    }
  });
};
