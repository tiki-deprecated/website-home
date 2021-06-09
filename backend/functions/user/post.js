"use strict";

const helpers = require("../../utils/helpers.js");
const sendgrid = require("../../utils/sendgrid");

exports.handler = function (event, context, callback) {
  if (event.body == null)
    callback(null, { statusCode: "400", headers: helpers.corsHeaders });

  const body = JSON.parse(event.body);
  if (body.email == null || !helpers.isEmail(body.email))
    callback(null, { statusCode: "400", headers: helpers.corsHeaders });

  body.email = helpers.sanitizeString(body.email);
  body.referrer = helpers.sanitizeString(body.referrer);
  body.optIn = helpers.sanitizeBool(body.optIn);
  body.confirmed = helpers.sanitizeBool(body.confirmed);

  sendgrid.update(
    {
      email: body.email,
      referrer: body.referrer,
      optIn: body.optIn,
      confirmed: body.confirmed,
    },
    function (err, data) {
      if (err) console.log(err, err.stack);
      if (data.statusCode === 200) {
        callback(null, {
          statusCode: "200",
          headers: helpers.corsHeaders,
          body: JSON.stringify({
            email: helpers.obfuscateEmail(body.email),
            referrer: body.referrer,
            optIn: body.optIn,
            confirmed: body.confirmed,
          }),
        });
      } else
        callback(null, {
          statusCode: "422",
          headers: helpers.corsHeaders,
        });
    }
  );
};
