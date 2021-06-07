const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });

const corsHeaders = function () {
  return {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST",
  };
};

module.exports = {
  corsHeaders: corsHeaders(),
  addContact(props, callback) {
    dynamodb.putItem(
      {
        TableName: process.env.DYNAMODB_TABLE,
        Item: {
          contact_info: { S: props.contact },
          timestamp_utc: { S: Date.now().toString() },
          contact_type: { S: props.type },
          isUser: { BOOL: props.isUser },
          code: { S: props.code },
          opt_in: { BOOL: props.optIn },
        },
      },
      function (err, data) {
        if (err) {
          console.log(err);
          callback({ success: false });
        } else callback({ success: true });
      }
    );
  },

  findContacts(contact, callback) {
    dynamodb.query(
      {
        TableName: process.env.DYNAMODB_TABLE,
        ExpressionAttributeValues: {
          ":contact": { S: contact },
          ":time": { S: "0" },
        },
        KeyConditionExpression:
          "contact_info = :contact and timestamp_utc > :time",
      },
      function (err, data) {
        if (err) {
          console.log(err);
          callback({ success: false });
        } else
          callback({
            success: true,
            data,
          });
      }
    );
  },

  updateContactOpt(contact, timestamp, optIn, callback) {
    dynamodb.updateItem(
      {
        TableName: process.env.DYNAMODB_TABLE,
        Key: {
          contact_info: { S: contact },
          timestamp_utc: { S: timestamp },
        },
        ExpressionAttributeValues: {
          ":optIn": { BOOL: optIn },
        },
        UpdateExpression: "SET opt_in = :optIn",
      },
      function (err, data) {
        if (err) {
          console.log(err);
          callback({ success: false });
        } else
          callback({
            success: true,
            data,
          });
      }
    );
  },

  getTotal(callback) {
    dynamodb.describeTable(
      {
        TableName: process.env.DYNAMODB_TABLE,
      },
      function (err, data) {
        if (err) {
          console.log(err);
          callback({ success: false });
        } else
          callback({
            success: true,
            count: data.Table.ItemCount,
          });
      }
    );
  },
};
