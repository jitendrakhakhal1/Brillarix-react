import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formMessage, setFormMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      setError("Please fill all the fields.");
      setFormMessage("");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      setFormMessage("");
      return;
    }

    setError("");
    setFormMessage("Thank you! We will contact you soon.");

    setName("");
    setEmail("");
    setMessage("");
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
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        ></textarea>

        <p className="character-count">
          Characters: {message.length}
        </p>

        <button type="submit" className="send-button">
          SEND
        </button>

        {error && <p className="error-message">{error}</p>}

        {formMessage && <p className="success-message">{formMessage}</p>}
      </form>
    </section>
  );
}

export default ContactForm;