const fetch = require('isomorphic-unfetch');

exports.handler = async function(event, _, callback) {
    
    if (event.methodEvent !== 'POST') {
        return callback({
            error: `${event.methodEvent} not supported`
        });
    }

    const body = JSON.parse(event.body);

    const {
        MAILCHIMP_MEMBERS_ENDPOINT: membersEndpoint,
        MAILCHIMP_AUTH: auth
    } = process.env;

    try {
        const response = await fetch(membersEndpoint, {
          headers: {
            "Authorization": auth,
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({
            email_address: body.email,
            status: "subscribed"
          })
        });
        const data = await response.json();
        callback({ error: null, status: data.subscribed  });
      } catch (error) {
        callback({ error });
      }
}