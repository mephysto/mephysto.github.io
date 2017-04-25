import React, { Component } from 'react';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maincard: document.getElementById('maincard')
    };
    const orientation = {
      sw: 0,
      sh: 0,
      mx: 0,
      my: 0,
      ox: 0,
      oy: 0
    };
    document.body.onmousemove = (ev) => {
      orientation.sw = window.innerWidth * 0.5;
      orientation.sh = window.innerHeight * 0.5;
      orientation.mx = ev.clientX;
      orientation.my = ev.clientY;
      orientation.ox = ((orientation.sw - orientation.mx) / orientation.sw).toFixed(2);
      orientation.oy = ((orientation.sh - orientation.my) / orientation.sh).toFixed(2);
      this.tiltLandingCard(orientation.oy * 15, orientation.ox * 20);
    }
  }
  tiltLandingCard(x, y) {
    document.getElementById('maincard').style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg) translate3d(0,0,0px)"
    document.getElementById('maincard').style.MozTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg) translate3d(0,0,0px)"
  }
  render() {
    return (
      <div className="content-landing wrapper clearfix">
        <div className="landing-card active" id="maincard">
          <div className="landing-card-shadow"></div>
          <div className="landing-card-background"></div>
          <div className="landing-card-content">
            <h1>Mephysto</h1>
            <h2>Maurice Melchers</h2>
            <p>	Front End Web Developer.<br />
              <a href="/work" className="btnLightning"><i className="fa fa-briefcase"></i>Work</a>
              <a href="/resume" className="btnLightning"><i className="fa fa-th-list"></i>Resume</a>
              <a href="mailto:contact@mauricemelchers.nl" target="_blank" className="btnLightning"><i className="fa fa-envelope"></i>Contact me</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
