import { useState } from "react";

const SubscribeForm = ({ hidden }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = e => {
    if (submitted) {
      e.preventDefault();
      return;
    }
    fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        email: e.target.EMAIL.value
      })
    });
    setSubmitted(true);
    e.preventDefault();
  };

  return (
    <div className="subscribe-form">
      <div id="mc_embed_signup">
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="/api/email"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <h2 className="sub-form-title">Subscribe for updates</h2>
              <div className="mc-field-group">
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  placeholder="Email Address"
                  required
                  style={hidden ? { display: "none" } : {}}
                />
              </div>
              <div id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div
                style={{ position: "absolute", left: -5000 }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_3fd3bec80495bbe1c3532fcb9_107e5f6222"
                  tabIndex="-1"
                  value=""
                  readOnly
                />
              </div>
              <div className="clear submit-container">
                <button
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                  style={hidden ? { display: "none" } : {}}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        ) : (
          <h2 className="sub-form-title">Thank you for signing up 😘</h2>
        )}
      </div>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
      <style jsx>
        {`
          .sub-form-title {
            /* nice */
            color: rgba(69, 69, 69, 1);
            font-size: 2rem;
            margin: 11px 0;
          }
          #mce-EMAIL {
            height: 35px;
            padding: 0 5px;
            font-size: 16px;
            width: 286px;
            margin: 11px 0;
          }
          #mc-embedded-subscribe {
            width: 100%;
            height: 35px;
            font-size: 16px;
            border-radius 3px;
          }

          #mc-embedded-subscribe:hover {
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default SubscribeForm;
