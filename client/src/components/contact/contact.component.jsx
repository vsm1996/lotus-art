import React, { Component } from "react";
import * as emailjs from "emailjs-com";

import "./contact.styles.css";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, email, message } = this.state;
    e.preventDefault();

    const messageUpdated = `From | ${name}: ` + message;

    const templateParams = {
      from_name: email,
      to_name: "l0tusart007@gmail.com",
      subject: "Lotus Art",
      message_html: messageUpdated
    };

    emailjs
      .send(
        "gmail",
        "template_mgKZRCOz",
        templateParams,
        "user_ZGzQ6szqqXtsDwYcf6Edg"
      )
      .then(response => {
        alert("Message sent");
        this.resetForm();
      })
      .catch(error => {
        console.log("Message Error: ", error);
        alert("There was an issue with your message! Please try again.");
      });
  };

  resetForm = () => {
    this.setState({ name: "", email: "", message: "" });
  };

  render() {
    const { email, name, message } = this.state;
    return (
      <div className="contact-container">
        <h1>Have questions? Email me!</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            label="Name"
            required
          />
          <FormInput
            type="text"
            name="message"
            value={message}
            onChange={this.handleChange}
            label="Message"
            required
          />
          <CustomButton type="submit"> CONTACT </CustomButton>
        </form>
      </div>
    );
  }
}

export default Contact;
