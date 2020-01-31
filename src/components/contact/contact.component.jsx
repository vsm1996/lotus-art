import React, { Component } from "react";
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
      e.preventDefault()
  }

  render() {
      const {email, name, message} = this.state
    return (
      <div className="contact-container">
        <h1>Contact</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required />
          <FormInput
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            label="Name"
            required />
          <FormInput
            type="text"
            name="message"
            value={message}
            onChange={this.handleChange}
            label="Message"
            required />
            <CustomButton type="submit"> CONTACT </CustomButton>
        </form>
      </div>
    );
  }
}

export default Contact;
