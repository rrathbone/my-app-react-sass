import React from 'react';

class Loader extends React.Component {
  render() {
    return (
      <section id="loader-section">
        <span className="Loader">
          <div className="Loader-indicator" >
            <h4 id="loading-header">Finding rides</h4>
            <h1>
              <span className="Loader-car" >
                <span className="Loader-car"><i className="fa fa-car" aria-hidden="true"></i></span>
                <span className="Loader-car"><i className="fa fa-car" aria-hidden="true"></i></span>
                <span className="Loader-car"><i className="fa fa-car" aria-hidden="true"></i></span>
              </span>
            </h1>
          </div>
        </span>
      </section>
    )
  }
};

export default Loader;
