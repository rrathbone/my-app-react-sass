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
        imgId: '',
        screens: [{
          img: '/images/screen1.png',
          className: 'img-responsive step-images',
          id: 'step1-img',
          alt: 'Search for ride share options'
        }, {
          img: '/images/screen2.png',
          className: 'img-responsive step-images',
          id: 'step2-img',
          alt: 'Compare and discover ride sharing options'
        }, {
          img: '/images/screen3.png',
          className: 'img-responsive step-images',
          id: 'step3-img',
          alt: 'Hail the ride share service of your choice'
        }, {
          img: '/images/screen4.png',
          className: 'img-responsive step-images',
          id: 'step4-img',
          alt: 'Travel to your destination'
        }]
      }

      this.getImageInfo = this.getImageInfo.bind(this);
      this.onHoverOn = this.onHoverOn.bind(this);
      this.onHoverOff = this.onHoverOff.bind(this);
      this.migoGreen = this.migoGreen.bind(this);
      this.toggle = this.toggle.bind(this);
   };

   getImageInfo(event) {
     this.setState({
       imgId: event
     })
     if(this.state.imgId === 'step4-img') {
       alert('image 4')
     }
   }

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
      this.setState({active : null })
    } else {
      this.setState({active : position })
    }
  }

  render() {
    // setTimeout(function () {
    //   this.setState({bgId: newbgId});
    // }.bind(this), 7000);
    // const screens = this.state.screens;



    return (
      <section id="how-animations">
        <HowAnimations
          getImageInfo={this.getImageInfo}
          onHoverOn={this.onHoverOn}
          onHoverOff={this.onHoverOff}
          migoGreen={this.migoGreen}
          screens={this.state.screens}
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
