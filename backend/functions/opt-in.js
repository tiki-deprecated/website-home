"use strict";

const { sanitize, contactType } = require("./format-data.js");
const sendgrid = require("./sendgrid");
const twilio = require("./twilio");
const {
  corsHeaders,
  addContact,
  findContacts,
  updateContactOpt,
} = require("./db.js");

exports.handler = function (event, context, callback) {
  if (event.body == null)
    callback(null, { statusCode: "400", headers: corsHeaders });

  const body = JSON.parse(event.body);
  if (body.contact == null)
    callback(null, { statusCode: "200", headers: corsHeaders });

  const contact = sanitize(body.contact);
  const type = contactType(contact);
  if (body.code == null) body.code = "";
  const code = sanitize(body.code);
  if (body.optIn == null) body.optIn = false;
  const optIn = body.optIn;

  findContacts(contact, function (rsp) {
    if (!rsp.success)
      callback(null, { statusCode: "500", headers: corsHeaders });
    else if (rsp.data.Items.length > 0) {
      rsp.data.Items.forEach(function (element, index, array) {
        updateContactOpt(
          element.contact_info.S,
          element.timestamp_utc.S,
          optIn,
          function (rsp) {}
        );
      });
      if (type === "email")
        sendgrid.participate({ contact, code, optIn }, function (err, data) {
          if (err) console.log(err, err.stack);
        });
      else if (optIn)
        twilio.participate({ contact, code }, function (err, data) {
          if (err) console.log(err, err.stack);
        });
      callback(null, { statusCode: "200", headers: corsHeaders });
    } else {
      addContact({ contact, type, isUser: true, code, optIn }, function (rsp) {
        if (rsp.success) {
          if (type === "email")
            sendgrid.participate({ contact, code, optIn }, function (
              err,
              data
            ) {
              if (err) console.log(err, err.stack);
            });
          else if (optIn)
            twilio.participate({ contact, code }, function (err, data) {
              if (err) console.log(err, err.stack);
            });
          callback(null, { statusCode: "200", headers: corsHeaders });
        } else callback(null, { statusCode: "500", headers: corsHeaders });
      });
    }
  });
};
