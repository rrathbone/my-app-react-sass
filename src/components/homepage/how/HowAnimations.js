import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';

const HowAnimations = ({ img, migoGreen, onHoverOn, onHoverOff, toggle }) => {
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
                <img className="img-responsive step-images" src={img} id="step1-img" alt="Search for Migo rides"></img>
              </div>

              <div className="col-sm-7" id="how-steps">

      					<div className="media service-box" id="step-1">
      						<div className="pull-left">
      							<i className="fa fa-search" id="step-1-icon" style={{background: migoGreen(0)}} onClick={() => {toggle(0)}} onMouseEnter={() => {onHoverOn(0)}} onMouseLeave={() => {onHoverOff(0)}}></i>
      						</div>
      						<div className="media-body how">
      							<h3 className="media-heading" id="step-1-header" onClick={() => {toggle(0)}} onMouseEnter={() => {onHoverOn(0)}} onMouseLeave={() => {onHoverOff(0)}}>Step 1: Search</h3>
      							<p id="step-1-des" onClick={() => {toggle(0)}} onMouseEnter={() => {onHoverOn(0)}} onMouseLeave={() => {onHoverOff(0)}}>Migo shows rides near you right now on a single screen. Rideshare and taxis are circles that come pick you up. Carshare vehicles are pins that you drive yourself.</p>
      						</div>
      					</div>

      					<div className="media service-box" id="step-2">
      						<div className="pull-left">
      							<i className="fa fa-map-marker" id="step-2-icon" style={{background: migoGreen(1)}} onClick={() => {toggle(1)}} onMouseEnter={() => {onHoverOn(1)}} onMouseLeave={() => {onHoverOff(1)}}></i>
      						</div>
      						<div className="media-body">
      							<h3 className="media-heading" id="step-2-header" onClick={() => {toggle(1)}} onMouseEnter={() => {onHoverOn(1)}} onMouseLeave={() => {onHoverOff(1)}}>Step 2: Compare</h3>
      							<p id="step-2-des" onClick={() => {toggle(1)}} onMouseEnter={() => {onHoverOn(1)}} onMouseLeave={() => {onHoverOff(1)}}>Tap a search box to check out the details and special information.  Enter a destination to get live price estimates.</p>
      						</div>
      					</div>

                <div className="media service-box" id="step-3">
      						<div className="pull-left">
      							<i className="fa fa-hand-paper-o" id="step-3-icon" style={{background: migoGreen(2)}} onClick={() => {toggle(2)}} onMouseEnter={() => {onHoverOn(2)}} onMouseLeave={() => {onHoverOff(2)}}></i>
      						</div>
      						<div className="media-body">
      							<h3 className="media-heading" id="step-3-header" onClick={() => {toggle(2)}} onMouseEnter={() => {onHoverOn(2)}} onMouseLeave={() => {onHoverOff(2)}}>Step 3: Hail</h3>
      							<p id="step-3-des" onClick={() => {toggle(2)}} onMouseEnter={() => {onHoverOn(2)}} onMouseLeave={() => {onHoverOff(2)}}>Try a service out directly in Migo, without needing 10 apps to do the job.  Or download and link a favorite app to use whenever you like.</p>
      						</div>
      					</div>

      					<div className="media service-box" id="step-4">
      						<div className="pull-left">
      							<i className="fa fa-taxi" id="step-4-icon" style={{background: migoGreen(3)}} onClick={() => {toggle(3)}} onMouseEnter={() => {onHoverOn(3)}} onMouseLeave={() => {onHoverOff(3)}}></i>
      						</div>
      						<div className="media-body">
      							<h3 className="media-heading" id="step-4-header" onClick={() => {toggle(3)}} onMouseEnter={() => {onHoverOn(3)}} onMouseLeave={() => {onHoverOff(3)}}>Step 4: Go!</h3>
      							<p id="step-4-des" onClick={() => {toggle(3)}} onMouseEnter={() => {onHoverOn(3)}} onMouseLeave={() => {onHoverOff(3)}}>Pay in app for most rides, though some still require cash or credit in the car.  After your ride, enter ratings to help those around you find their perfect ride!</p>
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
  img: PropTypes.string,
  migoGreen: PropTypes.func,
  onHoverOn: PropTypes.func,
  onHoverOff: PropTypes.func,
  toggle: PropTypes.func
}

export default HowAnimations;

// <img class="img-responsive step-images hide" src="/images/migo_app_2.png" id="step2-img" alt="Compare and discover ride sharing options"></img>
// <img class="img-responsive step-images hide" src="/images/migo_app_3.png" id="step3-img" alt="Hail the ride share service of your choice"></img>
// <img class="img-responsive step-images hide" src="/images/migo_app_4.png" id="step4-img" alt="Travel to your destination"></img>
