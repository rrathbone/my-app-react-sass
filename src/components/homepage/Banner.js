import React from 'react';

const Banner = () => {
  return (
    <section id="banner-section">
      <div className="container" id="banner-container">
        <div className="row" id="banner-row">
          <div className="col-xs-8" id="banner-content">
            <img src="/images/migo_logo.png" alt="" className="img-responsive logo" id="banner-logo"></img>
            <h1 id="h1-hp">The search engine for on-demand rides</h1>
            <p>Private beta now open in Seattle!</p>
            <button className="beta-signup-btn">Sign Up for the Beta</button>
          </div>
          <div className="col-xs-4 banner-img">
            <img className="img-responsive" src="/images/migo_app.png" alt="" id="banner-img"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
