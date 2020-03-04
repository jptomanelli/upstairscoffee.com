const fetch = require("isomorphic-unfetch");

const {
  MAILCHIMP_MEMBERS_ENDPOINT: membersEndpoint,
  MAILCHIMP_AUTH: auth
} = process.env;

exports.handler = async function({ httpMethod, body }, _, callback) {
  if (httpMethod !== "POST") {
    callback(null, {
      statusCode: 405,
      body: JSON.stringify({
        error: `Method is not supported`
      })
    });
  }

  try {
    const { email: email_address } = JSON.parse(body);

    const response = await fetch(membersEndpoint, {
      headers: {
        Authorization: auth,
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        email_address,
        status: "subscribed"
      })
    });

    const data = await response.json();

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        status: data.status
      })
    });
  } catch (error) {
    callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        error
      })
    });
  }
};
