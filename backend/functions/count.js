"use strict";

const AWS = require("aws-sdk");
const { corsHeaders, getTotal } = require("./db.js");

exports.handler = function (event, context, callback) {
  getTotal(function (rsp) {
    if (rsp.success) {
      callback(null, {
        statusCode: "200",
        headers: corsHeaders,
        body: JSON.stringify({
          total: rsp.count,
        }),
      });
    } else callback(null, { statusCode: "500", headers: corsHeaders });
  });
};
