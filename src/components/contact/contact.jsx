import React from "react";
import "./contact.scss";
import { useState } from "react";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/paperAirplanes.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form
          form
          method="POST"
          action="https://formsubmit.co/davidjortizmusic@gmail.com"
          enctype="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <label for="email">Email Address:</label>
          <input
            type="text"
            name="sender email"
            className="text"
            placeholder="Email"
          />
          <label for="message">Message:</label>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply ASAP!</span>}
        </form>
      </div>
    </div>
  );
}
