'use strict'

const AWS = require('aws-sdk')
const dynamodb = new AWS.DynamoDB({ apiVersion: '2012-08-10' })

exports.handler = function (event, context, callback) {
  if (event.body !== null && event.body !== undefined) {
    const body = JSON.parse(event.body)
    if (body.contact) {
      dynamodb.putItem(
        {
          TableName: 'website_signup_user',
          Item: {
            contact_info: {
              S: body.contact,
            },
            timestamp_utc: {
              S: Date.now().toString(),
            },
          },
        },
        function (err, data) {
          if (err) {
            callback(null, {
              statusCode: '500',
              body: err,
            })
          } else {
            callback(null, {
              statusCode: '200',
            })
          }
        }
      )
    }
  } else {
    callback(null, {
      statusCode: '400',
    })
  }
}
