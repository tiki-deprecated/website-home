'use strict'

const { isUser, contactType, sanitize } = require('./format-data.js')
const { corsHeaders, getTotal} = require('./db.js')
const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' })

exports.handler = function (event, context, callback) {

  getTotal(function(rsp){
    if(rsp.success)
      callback({ total: rsp.count }, { statusCode: '200', headers: corsHeaders })
    else
      callback(null, { statusCode: '500', headers: corsHeaders })
  })
}
