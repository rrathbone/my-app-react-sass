import React from 'react';

const About = () => {
  return (
    <section id="about-section">
      <div className="about section-padding" id="about-padding">
        <div className="container" id="about-container">

          <div className="row">
            <div className="header">
              <h1 className="section-title text-center wow fadeInDown" id="about-header">About Us</h1>
              <p className="text-center wow fadeInDown" id="about-p">Born from Travel Search</p>
              <div className="underline six-col">
                <i className="fa fa-users"></i>
              </div>
            </div>

            <div className="about-text wow fadeInUp">
              <p className="about-details">Migo is not a new transportation service, it’s a free search engine to help you find the best way from A to B.</p>
              <p className="about-details">Why did we start Migo? Because there’s been a revolution in personal transportation in the past 3 years with rideshare, taxis, carshare and even specialty services launching on apps in cities around the world.</p>
              <p className="about-details">But... most people don’t yet know about all the amazing options around them because each one is trapped in its own app! We launched Migo because we believe consumers want the <strong>best</strong> option as long as it’s closer, cheaper, and more convenient – and easy to try!</p>
              <p className="about-details">We’re a group of travel tech experts who saw a great opportunity to bring the best of travel search to you for personal transportation. Want to see some amazing ways from A to B whether your home or around the world – check out Migo!</p>
              <p className="about-details">- Jeff, Vince, Scott and the Migo team!</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
