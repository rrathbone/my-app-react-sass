import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';


const HowAnimations = ({ getImageInfo, migoGreen, onHoverOn, onHoverOff, screens, toggle }) => {
  // const screens = [{
  //   img: '/images/screen1.png',
  //   alt: 'Search for ride share options',
  //   className: 'img-responsive step-images'
  // }, {
  //   img: '/images/screen2.png',
  //   alt: 'Compare and discover ride sharing options',
  //   className: 'img-responsive step-images hide'
  // }, {
  //   img: '/images/screen3.png',
  //   alt: 'Hail the ride share service of your choice',
  //   className: 'img-responsive step-images hide'
  // }, {
  //   img: '/images/screen4.png',
  //   alt: 'Travel to your destination',
  //   className: 'img-responsive step-images hide'
  // }];



  return (
    <section id="how-it-works-section">
      <Grid>
        <div className="how section-padding" id="how-padding">
          <div className="container" id="large-screen-how">

            <div className="header">
              <h1 className="section-title text-center" id="how-header">How it Works</h1>
              <p className="how-p">Getting home from the game? Heading out to meet friends?
                Want to drive yourself to save moneys and maximize flexibility?
                Migo{"'"}s got you covered. Migo is your search engine for on-demand
                rides, showing you what is nearby and available right now. See every
                option and price live in Migo!</p>
              <div className="underline">
                <i className="fa fa-question-circle-o"></i>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-5" id="how-phone">
                {screens.map((screen, index) => (
                  <img className={screen.className} onClick={() => {getImageInfo(screen.id)}} key={index} id={screen.id} src={screen.img} alt={screen.alt}/>
                ))}
              </div>

              <div className="col-sm-7" id="how-steps">

                <div className="media service-box" id="step-1" onClick={() => {toggle(0)}} onMouseEnter={() => {onHoverOn(0)}} onMouseLeave={() => {onHoverOff(0)}}>
                  <div className="pull-left">
                    <i className="fa fa-search" id="step-1-icon" style={{background: migoGreen(0)}}></i>
                  </div>
                  <div className="media-body how">
                    <h3 className="media-heading" id="step-1-header">Step 1: Search</h3>
                    <p id="step-1-des">Migo shows rides near you right now on a single screen. Rideshare and taxis are circles that come pick you up. Carshare vehicles are pins that you drive yourself.</p>
                  </div>
                </div>

                <div className="media service-box" id="step-2" onClick={() => {toggle(1)}} onMouseEnter={() => {onHoverOn(1)}} onMouseLeave={() => {onHoverOff(1)}}>
                  <div className="pull-left">
                    <i className="fa fa-map-marker" id="step-2-icon" style={{background: migoGreen(1)}}></i>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading" id="step-2-header">Step 2: Compare</h3>
                    <p id="step-2-des">Tap a search box to check out the details and special information. Enter a destination to get live price estimates.</p>
                  </div>
                </div>

                <div className="media service-box" id="step-3" onClick={() => {toggle(2)}} onMouseEnter={() => {onHoverOn(2)}} onMouseLeave={() => {onHoverOff(2)}}>
                  <div className="pull-left">
                    <i className="fa fa-hand-paper-o" id="step-3-icon" style={{background: migoGreen(2)}}></i>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading" id="step-3-header">Step 3: Hail</h3>
                    <p id="step-3-des">Try a service out directly in Migo, without needing 10 apps to do the job.  Or download and link a favorite app to use whenever you like.</p>
                  </div>
                </div>

                <div className="media service-box" id="step-4"  onClick={() => {toggle(3)}} onMouseEnter={() => {onHoverOn(3)}} onMouseLeave={() => {onHoverOff(3)}}>
                  <div className="pull-left">
                    <i className="fa fa-taxi" id="step-4-icon" style={{background: migoGreen(3)}}></i>
                  </div>
                  <div className="media-body">
                    <h3 className="media-heading" id="step-4-header">Step 4: Go!</h3>
                    <p id="step-4-des">Pay in app for most rides, though some still require cash or credit in the car.  After your ride, enter ratings to help those around you find their perfect ride!</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Grid>
    </section>
  );
};

HowAnimations.propTypes = {
  getImageInfo: PropTypes.func,
  migoGreen: PropTypes.func,
  onHoverOn: PropTypes.func,
  onHoverOff: PropTypes.func,
  screens: PropTypes.array,
  toggle: PropTypes.func
}

export default HowAnimations;

// <img class="img-responsive step-images hide" src="/images/migo_app_2.png" id="step2-img" alt="Compare and discover ride sharing options"></img>
// <img class="img-responsive step-images hide" src="/images/migo_app_3.png" id="step3-img" alt="Hail the ride share service of your choice"></img>
// <img class="img-responsive step-images hide" src="/images/migo_app_4.png" id="step4-img" alt="Travel to your destination"></img>
