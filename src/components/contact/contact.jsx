import React from "react";
import "./contact.scss";
import { useState } from "react";

export default function Contact() {
  const FORM_ENDPOINT =
    "https://public.herotofu.com/v1/83fbaaf0-6d07-11ec-b2d5-af79f33d926c";

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/paperAirplanes.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
          <label for="email">Email Address:</label>
          <input
            type="text"
            name="email"
            className="text"
            placeholder="Email"
            required
          />
          <label for="message">Message:</label>
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Send Message</button>
          {submitted && <span>Thanks, I will reply ASAP!</span>}
        </form>
      </div>
    </div>
  );
}
