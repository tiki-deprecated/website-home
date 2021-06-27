"use strict";

const helpers = require("../../utils/helpers.js");
//const sendgrid = require("../../utils/sendgrid");
const db = require("../../utils/db");

//const NUM_SMS_SIGNUPS_IN_TWILIO = 11476;

exports.handler = function (event, context, callback) {
  const queryParams = event["queryStringParameters"];
  if (queryParams != null) {
    const referrer = event["queryStringParameters"]["referrer"];
    console.log("proxy: " + referrer);
  }

  db.getTotal(function (rsp) {
    if (rsp.success) {
      callback(null, {
        statusCode: "200",
        headers: helpers.corsHeaders(),
        body: JSON.stringify({
          total: rsp.count,
        }),
      });
    } else callback(null, { statusCode: "500", headers: helpers.corsHeaders() });
  });

  /*sendgrid.count(function (err, data) {
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
  });*/
};
