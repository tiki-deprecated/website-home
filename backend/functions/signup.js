'use strict'

import { isUser, contactType, sanitize } from 'backend/functions/format-data'
const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' })

exports.handler = function (event, context, callback) {
  if (event.body == null) callback(null, { statusCode: '400', })

  const isUserRes = isUser(event.path)
  if (isUser === null) callback(null, { statusCode: '400' })

  const body = JSON.parse(event.body)
  if (body.contact == null) callback(null, { statusCode: '200' })
  const contact = sanitize(body.contact)
  const type = contactType(contact)

  dynamodb.putItem(
    {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        contact_info: { S: contact },
        timestamp_utc: { S: Date.now().toString() },
        contact_type: { S: type },
        isUser: { B: isUserRes },
      },
    },
    function (err, data) {
      if (err) callback(null, { statusCode: '500', body: err })
      else callback(null, { statusCode: '200' })
    }
  )
}
