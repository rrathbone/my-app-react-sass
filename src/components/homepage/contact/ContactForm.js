import React, { PropTypes } from 'react';

// import EmailInput from '../../common/EmailInput';
// import TextInput from '../../common/TextInput';

const ContactForm = ({ handleChange, handleSubmit, email, message, name }) => {
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
                      <label htmlFor="name">Name:
                        <span className="label hide" id="nameLabelErr">
                          <i id="warning-icon" className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                          Please enter your name
                        </span></label>

                        <input
                          type="text"
                          className="valid"
                          id="nameInput"
                          name="name"
                          placeholder="Name"
                          value={name}
                          onChange={handleChange}
                        />

                        <label htmlFor="name">Email:
                          <span className="label hide" id="emailLabelErr">
                            <i id="warning-icon" className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            Please enter a valid email</span>
                          </label>
                        <input
                          type="email"
                          className="valid"
                          id="emailInput"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={handleChange}
                        />

                        <label htmlFor="name">Message:
                          <span className="label hide" id="messageLabelErr">
                            <i id="warning-icon" className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            Please enter a message
                          </span></label>

                        <textarea
                          type="text"
                          className="valid"
                          id="messageInput"
                          name="message"
                          cols="30"
                          rows="10"
                          placeholder="Message"
                          value={email}
                          onChange={handleChange}
                        />

                      <button className="submit-btn" id="contact-btn" type="submit" value="Send Message">Send Message</button>
                      <button className="submit-btn hide" id="contact-btn-complete" type="submit" value="Message Sent!">Message Sent!</button>
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
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  email: PropTypes.string,
  message: PropTypes.string,
  name: PropTypes.string
}

export default ContactForm;

// <form onSubmit={handleSubmit}>
// <label>
//   Name:
//   <input type="text" value={nameInput} onChange={handleChange} />
// </label>
// <input type="submit" value="Submit" />
// </form>

// <div className="parallax-back" data-stellar-background-ratio="0.5">
//   <div className="opcaity">
//     <div className="contact section-padding" id="contact-padding">
//       <div className="container">
//         <div className="row contact">
//           <div className="contact-caption clearfix">
//
//             <div className="header contact">
//               <h1 className="section-title text-center" id="contact-header">Contact Us</h1>
//             </div>
//
//             <div className="col-md-offset-1 contact-form">
//               <h3>Leave us a message</h3>
//
//               <form className="form" action="" name="registration" id="contactForm" onSubmit={this.handleSubmit}>
//                 <label htmlFor="name">Name:
//                   <span className="label hide" id="nameLabelErr">
//                     <i id="warning-icon" className="fa fa-exclamation-triangle" aria-hidden="true"></i>
//                     Please enter your name
//                   </span></label>
//                 <input
//                   name="nameInput"
//                   className="valid"
//                   type="text"
//                   id="nameInput"
//                   placeholder="Name">
//                   value={this.state.value}
//                   onChange={this.handleChange}
//                 </input>
//
//                 <label htmlFor="name">Email:
//                   <span className="label hide" id="emailLabelErr">
//                     <i id="warning-icon" className="fa fa-exclamation-triangle" aria-hidden="true"></i>
//                     Please enter a valid email</span>
//                   </label>
//                 <input className="valid" type="email" name="emailInput" id="emailInput" placeholder="Email"></input>
//
//                 <label htmlFor="name">Message:
//                   <span className="label hide" id="messageLabelErr">
//                     <i id="warning-icon" className="fa fa-exclamation-triangle" aria-hidden="true"></i>
//                     Please enter a message
//                   </span></label>
//                 <textarea className="valid" type="text" name="messageInput" id="messageInput" cols="30" rows="10" placeholder="Message"></textarea>
//
//                 <button className="submit-btn" id="contact-btn" type="submit" value="Send Message">Send Message</button>
//                 <button className="submit-btn hide" id="contact-btn-complete" type="submit" value="Message Sent!">Message Sent!</button>
//               </form>
//
//             </div>
//
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
