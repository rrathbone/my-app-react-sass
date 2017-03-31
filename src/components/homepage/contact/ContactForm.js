import React, { PropTypes } from 'react';
// import { Button } from 'react-bootstrap';

import EmailInput from '../../common/EmailInput';
import TextArea from '../../common/TextArea';
import TextInput from '../../common/TextInput';

const ContactForm = ({ email, errors, formComplete, handleChange, handleClick, handleSubmit, message, name, sending }) => {
  return (
    <section id="contact-section">
      <div className="parallax-back" data-stellar-background-ratio="0.5">
        <div className="opcaity">
          <div className="contact section-padding" id="contact-padding">
            <div className="container">
              <div className="row contact">
                <div className="contact-caption clearfix">

                  <div className="header contact">
                    <h1 className="section-title text-center" id="contact-header">Contact Us</h1>
                  </div>

                  <div className="col-md-offset-1 contact-form">
                    <h3>Leave us a message</h3>

                    <form className="form" id="contactForm" onSubmit={handleSubmit}>
                      <label htmlFor="name">Name:</label>
                        <TextInput
                          type="text"
                          className="valid"
                          id="nameInput"
                          name="name"
                          placeholder="Name"
                          value={name}
                          onChange={handleChange}
                          error={errors.name}
                        />

                      <label htmlFor="name">Email:</label>
                        <EmailInput
                          type="email"
                          className="valid"
                          id="emailInput"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={handleChange}
                          error={errors.email}
                        />

                      <label htmlFor="name">Message:</label>
                        <TextArea
                          type="text"
                          className="valid"
                          name="message"
                          cols="30"
                          rows="10"
                          placeholder="Message"
                          value={email}
                          onChange={handleChange}
                          error={errors.message}
                        />

                        <input
                          type="submit"
                          disabled={sending}
                          value={sending ? 'Message Sent!' : 'Send'}
                          className="submit-btn"
                          onClick={handleClick}
                        />
                    </form>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

ContactForm.propTypes = {
  email: PropTypes.string,
  errors: React.PropTypes.object,
  formComplete: PropTypes.bool,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  handleSubmit: PropTypes.func,
  message: PropTypes.string,
  name: PropTypes.string,
  sending: React.PropTypes.bool
}

export default ContactForm;
