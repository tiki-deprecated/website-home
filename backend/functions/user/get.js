"use strict";

const { corsHeaders } = require("../../utils/helpers.js");

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: "200",
    headers: corsHeaders,
    body: JSON.stringify({
      total: 420,
    }),
  });
};
