import "./Checkout.css";
import { useState, useRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import emailjs from "@emailjs/browser";

const Checkout = (props) => {
  const { isOpen, onClose } = props;

  const [email, setEmail] = useState("");
  const form = useRef();

  /*  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendEmail();
    }
  }; */

  const sendEmail = (e) => {
    e.preventDefault();
    // Your email js code here to handle form submission
    emailjs
      .sendForm(
        "service_9rcynit",
        "template_kg57ncd",
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

  const textToCopy = "0140023603506870682470";

  const handleClick = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {});
  };

  const handleCloseCheckout = () => {
    onClose(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleCloseCheckout}>
      <DialogContent sx={{ backgroundColor: "#e9e4dc" }}>
        <DialogTitle fontSize="29px" className="checkout-title">
          Ya casi es tuyo! Seguí estos pasos y listo!
        </DialogTitle>
        <div>
          <h2>1. Registra tu E-mail para enviarte la compra.</h2>
          <form ref={form} onSubmit={sendEmail} className="checkout-paso1-form">
            <input
              type="email"
              name="email"
              value={email}
              placeholder="e-mail"
              className="contact-input checkout-input"
              required
              onChange={(e) => setEmail(e.target.value)}
              /*               onKeyDown={handleKeyDown}
               */
            />
            <button type="submit">
              <ForwardToInboxIcon className="checkout-sendButton" />
            </button>
          </form>
        </div>
        <div>
          <h2>
            2.Copia este CBU para abonar sin costo agregado y hacé la
            transferencia.
          </h2>
          <div className="CbuButton-container">
            <h3>{textToCopy}</h3>
            <button>
              <ContentCopyIcon className="copy-button" onClick={handleClick} />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Checkout;
