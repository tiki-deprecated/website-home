const sendgrid = require("@sendgrid/client");
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  signup(params, callback) {
    const data = {
      contacts: [
        {
          email: params.contact,
          custom_fields: {
            e1_T: params.code,
            e2_D: new Date().toLocaleString().split(",")[0],
            e3_T: "false",
          },
        },
      ],
    };
    send(data, callback);
  },
  participate(params, callback) {
    const data = {
      contacts: [
        {
          email: params.contact,
          custom_fields: {
            e1_T: params.code,
            e3_T: params.optIn.toString(),
          },
        },
      ],
    };
    send(data, callback);
  },
};

function send(body, callback) {
  const request = {};
  request.body = body;
  request.method = "PUT";
  request.url = "/v3/marketing/contacts";
  sendgrid
    .request(request)
    .then(([response, body]) => {
      callback(null, { success: true });
    })
    .catch(function (error) {
      callback(error, { success: false });
    });
}
