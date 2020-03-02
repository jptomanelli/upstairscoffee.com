module.exports = {
  serverRuntimeConfig: {
    mailChimpConfig: {
      auth: process.env.MAILCHIMP_AUTH,
      membersEndpoint: process.env.MAILCHIMP_MEMBERS_ENDPOINT
    }
  }
};
