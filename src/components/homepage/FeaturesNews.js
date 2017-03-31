import React from 'react';

const FeaturesNews = () => {
  return (
    <section id="features-news-section">
      <div className="news-features section-padding" id="features-news-padding">
        <div className="container" id="news-features-container">
          <div className="row">

            <div className="col-md-6">
              <div className="header">
                <h1 className="section-title text-center wow fadeInDown" id="features-header">Latest Features</h1>
                <p className="text-center wow fadeInDown" id="features-p">See what{"'"}s new in our Migo app.</p>
                <div className="underline six-col">
                  <i className="fa fa-mobile-phone" aria-hidden="true"></i>
                </div>
              </div>

              <div className="features-news-list">
                <div className="nf-list pull-left">
                  <i className="fa fa-dot-circle-o"></i>
                </div>
                <div className="media-body nf">
                  <p id="feature-1">Toggle Ride Share Options - By visiting settings you can choose which ride share companies you want to see on your map.</p>
                </div>
              </div>

              <div className="features-news-list">
                <div className="nf-list pull-left">
                  <i className="fa fa-dot-circle-o"></i>
                </div>
                <div className="media-body nf">
                  <p id="feature-2">Feedback - Have a suggestion for the Migo team? You can now provide feedback during your ride.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="header">
                <h1 className="section-title text-center" id="news-header">Latest News</h1>
                <p className="text-center wow fadeInDown" id="news-p">Keep up-to-date with Migo in the media.</p>
                <div className="underline six-col">
                  <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                </div>
              </div>

              <div className="features-news-list wow fadeInUp">
                <div className="nf-list pull-left">
                  <i className="fa fa-dot-circle-o"></i>
                </div>
                <div className="media-body nf">
                  <a className="news-links" href="https://www.eventbrite.com/e/mobility-innovations-speaker-series-creating-the-netflix-of-transportation-tickets-32630227890#">SDOT</a> - Mobility Innovations Speaker Series: Creating the Netflix of Transportation.
                </div>
                <div className="nf-list pull-left older-articles">
                  <i className="fa fa-dot-circle-o"></i>
                </div>
                <div className="media-body nf">
                  <a className="news-links" href="http://www.geekwire.com/2017/best-way-b-former-expedia-vet-raises-1-5m-stealthy-transportation-advice-startup/" target="_blank">Geekwire</a> - Best way from A to B: Former Expedia vet raises $1.5M for stealthy transportation advice startup
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesNews;
