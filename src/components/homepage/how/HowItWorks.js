import React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import ScrollListener from 'react-scroll-listener';

import HowAnimations from './HowAnimations';

class HowItWorks extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        active: null,
        hovering: false,
        img: '/images/migo_app_1.png'
      }

      this.onHoverOn = this.onHoverOn.bind(this);
      this.onHoverOff = this.onHoverOff.bind(this);
      this.migoGreen = this.migoGreen.bind(this);
      this.toggle = this.toggle.bind(this);
   };

  onHoverOn(position){
    if(this.state.active === position || this.state.active !== position) {
      this.setState({
        active : position
      })
    }

    if(this.props.hover){
      this.setState({hovering: true});
    }
  }

  onHoverOff(position) {
    if(this.state.active === position || this.state.active !== position) {
      this.setState({
        active : null
      })
    }

    if(this.props.hover){
      this.setState({hovering: false});
    }
  }

  migoGreen(position) {
    if(this.state.active === position) {
      return '#91c84a';
    }

    return '';
  }

  toggle(position){
    if(this.state.active === position) {
      this.setState({active : null, img: '/images/migo_app_3.png'})
    } else {
      this.setState({active : position, img: '/images/migo_app_1.png'})
    }
  }

  render() {
    // setTimeout(function () {
    //   this.setState({bgId: newbgId});
    // }.bind(this), 7000);
    return (
      <section id="how-animations">
        <HowAnimations
          onHoverOn={this.onHoverOn}
          onHoverOff={this.onHoverOff}
          img={this.state.img}
          migoGreen={this.migoGreen}
          toggle={this.toggle}
        />
      </section>
    );
  }
}

export default HowItWorks;

// <ReactCSSTransitionGroup transitionName="example"
//   transitionEnterTimeout={500} transitionLeaveTimeout={500}>
//   {items}
// </ReactCSSTransitionGroup>
