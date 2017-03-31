import React from 'react';

const Partners = () => {
  return (
    <section id="partners-section">
      <div className="partners section-padding" id="partners-padding">
        <div className="container" id="partner-container">

          <div className="header">
            <h1 className="section-title text-center wow fadeInDown" id="partners-header">Beta Partners</h1>
            <p className="text-center wow fadeInDown" id="partners-p">Bacon ipsum dolor amet alcatra t-bone corned beef strip steak sausage.</p>
            <div className="underline handshake">
              <i className="fa fa-handshake-o"></i>
            </div>
          </div>

          <div className="partner-list">

            <div className="col-md-4 col-sm-6 wow fadeInUp" id="car2go" data-wow-duration="1500ms" data-wow-delay="0ms">
              <div className="media service-box partners">
                <div className="pull-left">
                  <a href="https://www.car2go.com/US/en/" target="_blank"><img id="car2go_logo" src="/images/car2go_logo.png" alt="Car2Go"></img></a>
                </div>
                <div className="media-body" id="car2go-body">
                  <h4 className="media-heading partner-name">Car2Go</h4>
                  <p className="partner-info">Bacon ipsum dolor amet bacon spare ribs pastrami.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 wow fadeInUp" id="curb" data-wow-duration="1500ms" data-wow-delay="100ms">
              <div className="media service-box partners">
                <div className="pull-left">
                  <a href="https://gocurb.com/" target="_blank"><img id="curb_logo" src="/images/curb_logo.png" alt="Curb"></img></a>
                </div>
                <div className="media-body" id="curb-body">
                  <h4 className="media-heading partner-name">Curb</h4>
                  <p className="partner-info">Pig pastrami pork chop ham turducken ribeye jerky sausage meatball.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 wow fadeInUp" id="flywheel" data-wow-duration="1500ms" data-wow-delay="200ms">
              <div className="media service-box partners">
                <div className="pull-left">
                  <a href="https://www.flywheel.com/" target="_blank"><img id="flywheel_logo" src="/images/flywheel_logo.jpeg" alt="Flywheel"></img></a>
                </div>
                <div className="media-body" id="flywheel-body">
                  <h4 className="media-heading partner-name">Flywheel</h4>
                  <p className="partner-info">Short ribs pastrami beef filet mignon pork chop tongue ribeye meatloaf.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 wow fadeInUp" id="lyft" data-wow-duration="1500ms" data-wow-delay="300ms">
              <div className="media service-box partners">
                <div className="pull-left">
                  <a href="https://www.lyft.com/" target="_blank"><img id="lyft_logo" src="/images/lyft_Logo.png" alt="Lyft"></img></a>
                </div>
                <div className="media-body" id="lyft-body">
                  <h4 className="media-heading partner-name">Lyft</h4>
                  <p className="partner-info">Biltong flank bacon chicken sirloin short loin shank pork meatball pastrami.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 wow fadeInUp" id="syc" data-wow-duration="1500ms" data-wow-delay="400ms">
              <div className="media service-box partners">
                <div className="pull-left">
                  <a href="https://www.seattleyellowcab.com/" target="_blank"><img id="yellowcab_logo" src="/images/yellowcab_logo.jpeg" alt="Seattle Yellow Cab"></img></a>
                </div>
                <div className="media-body" id="syc-body">
                  <h4 className="media-heading partner-name">Seattle Yellow Cab</h4>
                  <p className="partner-info">Pork belly salami beef, frankfurter ground pork loin leberkas ribeye brisket cow sirloin. </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 wow fadeInUp" id="zoro" data-wow-duration="1500ms" data-wow-delay="500ms">
              <div className="media service-box partners">
                <div className="pull-left">
                  <a href="https://zoroapp.com/" target="_blank"><img id="zoro_logo" src="/images/zoro_logo.png" alt="Zoro"></img></a>
                </div>
                <div className="media-body" id="zoro-body">
                  <h4 className="media-heading partner-name">Zoro</h4>
                  <p className="partner-info">Ground round meatloaf burgdoggen, cow sausage alcatra picanha landjaeger.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Partners;
