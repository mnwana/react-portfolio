import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

function Contact(props) {
  const { pageSelected } = props;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };
  // add functionality to send this to sql db

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log("Submit Form", formState);
    } else {
      console.log("Form Submitted!");
    }
  };

  if (pageSelected === "contact") {
    return (
      <section>
        <h1>Contact Me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" defaultValue={name} onBlur={handleChange}/>
          </div>
          <div>
            <label htmlFor="email">Email address:</label>
            <input type="email" name="email" defaultValue={email} onBlur={handleChange}/>
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange}/>
          </div>
          {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
          <button data-testid='button' type="submit">Submit</button>
        </form>
      </section>
    );
  }
  return;
}

export default Contact;
