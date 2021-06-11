"use strict";

const helpers = require("../../utils/helpers.js");
const sendgrid = require("../../utils/sendgrid");
const db = require("../../utils/db");

exports.handler = function (event, context, callback) {
  if (event.body == null) callback(null, helpers.badRequest());

  const body = JSON.parse(event.body);
  if (body.email == null || !helpers.isEmail(body.email))
    callback(null, helpers.badRequest());

  body.email = helpers.sanitizeString(body.email);
  body.referrer = helpers.sanitizeString(body.referrer);

  db.findContacts(body.email, function (rsp) {
    if (rsp.success && rsp.data.Items.length > 0) {
      // eslint-disable-next-line no-unused-vars
      rsp.data.Items.forEach(function (element, index, array) {
        db.updateContactOpt(
          element.contact_info.S,
          element.timestamp_utc.S,
          body.participate == null ? false : body.participate,
          // eslint-disable-next-line no-unused-vars
          function (_) {}
        );
      });
    } else {
      db.addContact(
        {
          contact: body.email,
          type: "email",
          isUser: true,
          code: body.referrer == null ? "" : body.referrer,
          optIn: body.participate == null ? false : body.participate,
        },
        // eslint-disable-next-line no-unused-vars
        function (_) {}
      );
    }
  });

  sendgrid.update(
    {
      email: body.email,
      referrer: body.referrer,
      participate: body.participate,
      confirmed: body.confirmed,
    },
    function (err, data) {
      if (err) console.log(err, err.stack);
      if (data && helpers.is2xx(data.code)) {
        callback(null, {
          statusCode: "200",
          headers: helpers.corsHeaders(),
          body: JSON.stringify({
            email: helpers.obfuscateEmail(body.email),
            referrer: body.referrer,
            participate: body.participate,
            confirmed: body.confirmed,
          }),
        });
      } else callback(null, helpers.badRequest());
    }
  );
};
