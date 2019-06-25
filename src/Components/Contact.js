import React, { Component } from "react";
import "./Contact.css";

import { messagesRef } from "./Firebase";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const messageform = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    };

    const newMessageRef = messagesRef.push();
    newMessageRef.set(messageform);

    // hide and show message sent
    document.querySelector(".alert").style.display = "block";
    // Hide alert after 3 seconds
    setTimeout(function() {
      document.querySelector(".alert").style.display = "none";
    }, 3000);

    this.setState({
      name: "",
      email: "",
      message: ""
    });
  };

  render() {
    return (
      <div className="contact">
        <div className="container">
          <div className="wrapper">
            <div className="company-info">
              <h3>Want to know more?</h3>
              <br />
              <p>
              Do you have any questions about the results or if you want some guidance don't hesitate to contact us for counseling
              </p>
            </div>
            <div className="contact-form">
              <div class="alert">Your message has been sent</div>
              <form onSubmit={this.onSubmit}>
                <p>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    required
                  />
                </p>

                <p>
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </p>

                <p className="full">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    value={this.state.message}
                    onChange={this.onChange}
                    required
                  />
                </p>
                <p className="full">
                  <button type="submit">Submit</button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
