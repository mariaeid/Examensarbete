import React from "react";

import styles from "./index.module.scss";

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <div className={styles.contactFormContainer}>
        <form className={styles.contactForm}>
          <label htmlFor="name">Namn</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handle_change}
            required
          />
          <label htmlFor="email">Mail</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handle_change}
            required
          />
          <label htmlFor="subject">Ämne</label>
          <input
            type="text"
            name="subject"
            value={this.state.subject}
            onChange={this.handle_change}
            required
          />
          <label htmlFor="message">Meddelande</label>
          <textarea
            type="textarea"
            name="message"
            value={this.state.message}
            onChange={this.handle_change}
            required
            cols="40"
            rows="5"
          ></textarea>
          <input
            className={styles.contactFormSubmit}
            type="submit"
            value="Skicka meddelande"
          />
        </form>
      </div>
    );
  }
}

export default ContactForm;
