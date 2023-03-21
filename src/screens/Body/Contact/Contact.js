import "./Contact.css";
import contactImage from "../../../images/contactImage.png";
import { useState } from "react";

const Contact = () => {
  /*   const [email, setEmail] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendEmail();
    }
  };

  const sendEmail = () => {
    // Your email js code here to handle form submission
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        "YOUR_FORM_ID",
        "YOUR_USER_ID"
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((error) => {
        console.log(error.text);
      });
    setEmail("");
  }; */
  return (
    <div className="contact-container">
      <div className="image-container">
        <img
          alt="contact-image"
          src={contactImage}
          width="100%"
          height="100%"
        />
      </div>
      <div className="contact-form-container">
        <h1>ELEVATE</h1>
        <p>
          Se la/el primera/o en recibir descuentos, oportunidades únicas e
          información exluciva.
        </p>
        <input
          type="email"
          placeholder="e-mail"
          className="contact-input"
          /*          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown} */
        />
      </div>
    </div>
  );
};

export default Contact;
