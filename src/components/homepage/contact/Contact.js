import React from 'react';
import axios from 'axios';

import ContactForm from './ContactForm';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      errors: {},
      loading: false,
      message: '',
      name: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    const emailInput = this.state.email;
    const messageInput = this.state.message;
    const nameInput = this.state.name;

    if(!nameInput) {
      console.log('name cannot be blank')
    }

    if(!emailInput) {
      console.log('Please enter an email address');
    }

    if(!messageInput) {
      console.log('Please enter a message');
    }

    if(nameInput && emailInput && messageInput) {
      axios({
        // url: 'https://formspree.io/info@getmigo.com',
        method: 'post',
        url: 'https://formspree.io/rachelle@migo.co',
        data: {
          message: this.state.message,
          email: this.state.email,
          from: this.state.name
        },
        dataType: 'json'
      });
      console.log(nameInput, emailInput, messageInput);
    }

    event.preventDefault();
  }

  render() {
    return (
      <section>
        <ContactForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          emailInput={this.state.emailInput}
          messageInput={this.state.nameInput}
          nameInput={this.state.nameInput}
        />
      </section>
    );
  }
}

Contact.propTypes = {
};

export default Contact;
