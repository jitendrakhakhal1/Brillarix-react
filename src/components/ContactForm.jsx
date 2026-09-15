import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formMessage, setFormMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setFormMessage("Please fill all the fields.");
    } else {
      setFormMessage("Thank you! We will contact you soon.");
    }
  }

  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>

        <button type="submit" className="send-button">
          SEND
        </button>

        <p>{formMessage}</p>
      </form>
    </section>
  );
}

export default ContactForm;