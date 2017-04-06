import React from 'react';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import ScrollListener from 'react-scroll-listener';

import HowAnimations from './HowAnimations';

class HowItWorks extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        active: null,
        addClass1: false,
        hovering: false,
        icons: [{
          className: 'fa fa-search',
          id: 'step-1-icon'
        }, {
          className: 'fa fa-map-marker',
          id: 'step-2-icon'
        }, {
          className: 'fa fa-hand-paper-o',
          id: 'step-3-icon'
        }, {
          className: 'fa fa-taxi',
          id: 'step-4-icon'
        }],
        imgId: '',
        screens: [{
          img: '/images/screen1.png',
          className: 'img-responsive step-images img-1',
          img_id: 'step1-img',
          alt: 'Search for ride share options'
        }, {
          img: '/images/screen2.png',
          className: 'img-responsive step-images img-2 hide',
          img_id: 'step2-img',
          alt: 'Compare and discover ride sharing options'
        }, {
          img: '/images/screen3.png',
          className: 'img-responsive step-images img-3 hide',
          img_id: 'step3-img',
          alt: 'Hail the ride share service of your choice'
        }, {
          img: '/images/screen4.png',
          className: 'img-responsive step-images img-4 hide',
          img_id: 'step4-img',
          alt: 'Travel to your destination'
        }],
        steps: [{
          id: 'step-1'
        }, {
          id: 'step-2'
        }, {
          id: 'step-3'
        }, {
          id: 'step-4'
        }]
      }

      this.getImageInfo = this.getImageInfo.bind(this);
      this.onHoverOn = this.onHoverOn.bind(this);
      this.onHoverOff = this.onHoverOff.bind(this);
      this.migoGreen = this.migoGreen.bind(this);
      // this.toggle = this.toggle.bind(this);
   };

   getImageInfo(screenId) {
     this.setState({
       imgId: screenId
     })

    console.log(this.state.imgId);

    if(this.state.imgId === 'step1-img') {
      this.setState({
        addClass1: true
      })
    }

    if(this.state.imgId === 'step2-img') {
      this.setState({
        addClass2: true
      })
    }

    if(this.state.imgId === 'step3-img') {
      this.setState({
        addClass3: true
      })
    }

    if(this.state.imgId === 'step4-img') {
      this.setState({
        addClass4: true
      })
    }
  }

  onHoverOn(position) {
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

    if(this.props.hover) {
      this.setState({ hovering: false });
    }
  }

  migoGreen(position) {
    if(this.state.active === position) {
      return '#91c84a';
    }

    return '';
  }

  // toggle(position){
  //   if(this.state.active === position) {
  //     this.setState({ active : null })
  //   } else {
  //     this.setState({ active : position })
  //   }
  // }

  render() {
    // setTimeout(function () {
    //   this.setState({bgId: newbgId});
    // }.bind(this), 7000);
    // const screens = this.state.screens;

    return (
      <section id="how-animations">
        <HowAnimations
          addClass1={this.state.addClass1}
          addClass2={this.state.addClass2}
          addClass3={this.state.addClass3}
          addClass4={this.state.addClass4}
          getImageInfo={this.getImageInfo}
          icons={this.state.icons}
          imgId={this.state.imgId}
          migoGreen={this.migoGreen}
          onHoverOn={this.onHoverOn}
          onHoverOff={this.onHoverOff}
          screens={this.state.screens}
          steps={this.state.steps}
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
