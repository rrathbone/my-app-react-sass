import React from 'react';
import { Grid } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Grid>
        <div className="container" id="footer-container">
          <div className="row">
            <div className="col-sm-4 col-1" id="footer-btn">
              <button className="beta-signup-btn" id="footer-hiring-btn"
                href="https://www.linkedin.com/jobs/search/?f_C=16211431&locationType=Y" target="_blank">
                We{"'"}re Hiring!
              </button>
            </div>
            <div className="col-sm-4 col-2" id="migo-links">
              <h4 id="privacy"><a href="/privacy.html">Privacy</a></h4>
              <h4 id="tos"><a href="/termsofservice.html">Terms of Service</a></h4>
            </div>
            <div className="col-sm-4 col-3" id="social-media">
              <a href="https://www.linkedin.com/company-beta/16211431/"><i className="fa fa-linkedin fa-3x social-media-icons" id="linkedin-sm"></i></a>
              <a href="https://twitter.com/GetMigo?lang=en"><i className="fa fa-twitter fa-3x social-media-icons"></i></a>
            </div>
          </div>

          <div className="row" id="copyright">
    				<p>&#169;2017 Closer Mobile, Inc.</p>
    			</div>
        </div>
      </Grid>
    </footer>
  );
};

export default Footer;
