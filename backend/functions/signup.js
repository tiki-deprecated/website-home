'use strict'

const { isUser, contactType, sanitize } = require('./format-data.js')
const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' })

exports.handler = function (event, context, callback) {
  if (event.body == null) callback(null, { statusCode: '400', })

  const isUserRes = isUser(event.path)
  console.log("isUserRes:" + isUserRes)
  if (isUserRes === null) callback(null, { statusCode: '400' })

  const body = JSON.parse(event.body)
  if (body.contact == null) callback(null, { statusCode: '200' })
  const contact = sanitize(body.contact)
  console.log("contact:" + contact)
  const type = contactType(contact)
  console.log("type:" + type)

  dynamodb.putItem(
    {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        contact_info: { S: contact },
        timestamp_utc: { S: Date.now().toString() },
        contact_type: { S: type },
        isUser: { BOOL: isUserRes },
      },
    },
    function (err, data) {
      console.log(err)
      if (err) callback(null, {
        statusCode: '500',
        headers: {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "https://mytiki.com, https://www.mytiki.com",
          "Access-Control-Allow-Methods": "OPTIONS,POST"
        },
        body: err
      })
      else callback(null, {
        statusCode: '200',
        headers: {
          "Access-Control-Allow-Headers" : "Content-Type",
          "Access-Control-Allow-Origin": "https://mytiki.com, https://www.mytiki.com",
          "Access-Control-Allow-Methods": "OPTIONS,POST"
        }
      })
    }
  )
}
