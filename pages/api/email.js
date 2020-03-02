import fetch from 'isomorphic-unfetch';
import getConfig from 'next/config'

const { serverRuntimeConfig: { mailChimpConfig } } = getConfig();

export default async (req, res) => {

  const body = JSON.parse(req.body);

  if (req.method === "POST" && body && body.email) {
    try {
      const response = await fetch(mailChimpConfig.membersEndpoint, {
        headers: {
          "Authorization": mailChimpConfig.auth,
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          email_address: body.email,
          status: "subscribed"
        })
      });
      const data = await response.json();
      res.json({ status: data.subscribed });
    } catch (err) {
      res.json({ status: 'failed' });
    }
  }
};
