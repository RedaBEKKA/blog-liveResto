import React, { useState, useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contacus.css";
const ContactUs = () => {
  const initialValues = {
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.user_name) {
      errors.user_name = "nom require";
    }
    if (!values.user_email) {
      errors.user_email = "email require";
    } else if (!regex.test(values.user_email)) {
      errors.user_email = "email invalide";
    }
    if (!values.subject) {
      errors.subject = "subject require";
    }
    if (!values.message) {
      errors.message = "message require au maximum 500 character";
    } else if (values.message > 500) {
      errors.message = "message doit etre moin 500 charcters";
    }
    return errors;
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    emailjs
      .sendForm(
        "service_m2rdi49",
        "template_aih9dnw",
        form.current,
        "K9-g7OJq2GoNbvI6D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  return (
    <section className="container">
      <h2 className="title">Nous contacter</h2>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <span className="span-error">{formErrors.user_name}</span>
        <input
          onChange={handleChange}
          defaultValue={formValues.user_name}
          className="input"
          type="text"
          name="user_name"
          placeholder="nom"
        />
        <span className="span-error">{formErrors.user_email}</span>
        <input
          onChange={handleChange}
          defaultValue={formValues.user_email}
          className="input"
          type="email"
          name="user_email"
          placeholder="email"
          required
        />
        <span className="span-error">{formErrors.subject}</span>
        <input
          onChange={handleChange}
          defaultValue={formValues.subject}
          className="input"
          type="text"
          name="subject"
          placeholder="subject"
          required
        />
        <span className="span-error">{formErrors.message}</span>
        <textarea
          onChange={handleChange}
          defaultValue={formValues.message}
          className="textarea"
          name="message"
          cols="30"
          rows="10"
        ></textarea>
        <button className="input button" type="submit" value="Send">
          envoyer
        </button>
      </form>
    </section>
  );
};

export default ContactUs;
