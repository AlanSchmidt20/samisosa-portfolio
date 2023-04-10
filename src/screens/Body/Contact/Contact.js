import "./Contact.css";
import contactImage from "../../../images/contactImage.png";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [email, setEmail] = useState("");
  const form = useRef();

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && email.length > 5) {
      event.preventDefault();
      sendEmail();
    }
  };

  const sendEmail = (e) => {
    // Your email js code here to handle form submission
    emailjs
      .sendForm(
        "service_9rcynit",
        "template_7qoeltw",
        form.current,
        "vs5oM0vPGYvZafiQE"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    setEmail("");
  };
  return (
    <div className="contact-container">
      <div className="image-container">
        <img alt="contact" src={contactImage} width="100%" height="100%" />
      </div>
      <div className="contact-form-container">
        <h1>ELEVATE</h1>
        <p>
          Sé la/el primera/o en recibir descuentos, oportunidades únicas e
          información exclusiva.
        </p>
        <form ref={form} onSubmit={sendEmail} className="contact-input">
          <input
            type="email"
            name="email"
            placeholder="e-mail"
            className="contact-input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
