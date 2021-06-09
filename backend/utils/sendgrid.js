const sendgrid = require("@sendgrid/client");
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  update(params, callback) {
    const data = {
      contacts: [
        {
          email: params.email,
          custom_fields: {
            e1_T: params.referrer,
            e2_D: new Date().toLocaleString().split(",")[0],
            e3_T: params.optIn.toString(),
            e4_T: params.confirmed.toString(),
          },
        },
      ],
    };
    send(data, callback);
  },
};

function send(body, callback) {
  sendgrid
    .request({
      body,
      method: "PUT",
      url: "/v3/marketing/contacts",
    })
    .then(([response, body]) => {
      callback(null, { code: response.statusCode, body });
    })
    .catch(function (error) {
      callback(error, null);
    });
}
