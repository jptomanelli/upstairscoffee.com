exports.handler = function(event, context, callback) {
    
    console.log(event.methodEvent);

    if (event.methodEvent !== 'POST') {
        return;
    }

    const body = JSON.parse(event.body);
    console.log(body);

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
        callback({ status: data.subscribed  });
      } catch (err) {
        callback(err);
      }
}