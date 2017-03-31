import React from 'react';
import axios from 'axios';

import ContactForm from './ContactForm';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: {},
      formComplete: false,
      isButtonDisabled: false,
      message: '',
      name: '',
      sending: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  contactFormIsValid() {
    let name = this.state.name;
    let email = this.state.email;
    let emailPattern = email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    let message = this.state.message;
    let formIsValid = true;
    let errors = {};

    if(!name) {
      errors.name = 'Name cannot be blank';
      formIsValid = false;
    }

    if(!email) {
      errors.email = 'Email cannot be blank';
      formIsValid = false;
    } else if(!emailPattern) {
      errors.email = 'Email must be valid';
      formIsValid = false;
    }

    if(!message) {
      errors.message = 'Message cannot be blank';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const incompleteForm = (!this.state.name || !this.state.email || !this.state.message)

    this.setState({
      formComplete: !incompleteForm,
      [name]: value
    });
  }

  handleClick() {
    this.setState({
      isButtonDisabled: true
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    if(!this.contactFormIsValid()) {
      return;
    }

    this.setState({
      sending: true
    });

    const emailInput = this.state.email;
    const messageInput = this.state.message;
    const nameInput = this.state.name;

    if(nameInput && emailInput && messageInput) {
      axios({
        method: 'post',
        // url: 'https://formspree.io/info@getmigo.com',
        // url: 'https://formspree.io/scott@migo.co',
        url: 'https://formspree.io/rachelle@migo.co',
        data: {
          message: this.state.message,
          email: this.state.email,
          from: this.state.name
        },
        dataType: 'json'
      });
    }
  }

  render() {
    return (
      <section>
        <ContactForm
          emailInput={this.state.emailInput}
          errors={this.state.errors}
          formComplete={this.state.formComplete}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleSubmit={this.handleSubmit}
          messageInput={this.state.nameInput}
          nameInput={this.state.nameInput}
          sending={this.state.sending}
        />
      </section>
    );
  }
}

export default Contact;
