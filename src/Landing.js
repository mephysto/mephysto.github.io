import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Particles from 'react-particles-js';

import './styles/landing.css';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maincard: document.getElementById('maincard'),
      sfx: [
        new Audio("sfx/squelch.mp3"),
        new Audio("sfx/guitar_wank.mp3"),
        new Audio("sfx/plugin.mp3"),
        new Audio("sfx/click.mp3"),
        new Audio("sfx/electric.mp3")
      ]
    };
    const orientation = {
      sw: 0,
      sh: 0,
      mx: 0,
      my: 0,
      ox: 0,
      oy: 0
    };
    this.particleParams = {
      "particles": {
        "number": {
          "value": 10,
          "density": {
            "enable": true,
            "value_area": 500
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 4,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 100,
          "color": "#ffffff",
          "opacity": 1,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.25,
          "direction": "bottom",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "repulse"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true

    };
    this.menuHoverHandler = this.menuHoverHandler.bind(this);
    document.body.onmousemove = (ev) => {
      if (window.location.pathname === "/"){
        orientation.sw = window.innerWidth * 0.5;
        orientation.sh = window.innerHeight * 0.5;
        orientation.mx = ev.clientX;
        orientation.my = ev.clientY;
        orientation.ox = ((orientation.sw - orientation.mx) / orientation.sw).toFixed(2);
        orientation.oy = ((orientation.sh - orientation.my) / orientation.sh).toFixed(2);
        this.tiltLandingCard(orientation.oy * 15, orientation.ox * 20);
      }
    };
  }
  getRandom(soundPool) {
    return soundPool[Math.floor(Math.random() * soundPool.length)];
  }
  menuHoverHandler() {
    // console.log(this.getRandom(this.state.sfx));
    var playPromise = this.getRandom(this.state.sfx).play();
    if (playPromise !== undefined) {
      playPromise.then(function () {
        // console.log('Automatic playback started!')
      }).catch(function (error) {
        // console.log('// Automatic playback failed.')
      });
    }

  }
  tiltLandingCard(x, y) {
    document.getElementById('maincard').style.transform = "rotateX(" + x + "deg) rotateY(" + -y + "deg) translate3d(0,0,0px)"
  }
  render() {
    return (
      <div className="content-landing wrapper clearfix">
        <div id="particle-container">
          <Particles params={this.particleParams} />
        </div>
        <div className="landing-card active" id="maincard">
          <div className="landing-card-shadow"></div>
          <div className="landing-card-background"></div>
          <div className="landing-card-content">
            <h1>Mephysto</h1>
            <h2>Maurice Melchers</h2>
            <p>	Front End Web Developer.<br />
              <Link to="/work" title="Check out my work" className="btnLightning" onMouseOver={this.menuHoverHandler}>
                <i className="fa fa-briefcase"></i>Work
              </Link>
              <Link to="/resume" title="Check out my resume" className="btnLightning" onMouseOver={this.menuHoverHandler}>
                <i className="fa fa-th-list"></i>Resume
              </Link>
              <a href="mailto:contact@mauricemelchers.nl" target="_blank" className="btnLightning" onMouseOver={this.menuHoverHandler}><i className="fa fa-envelope"></i>Contact me</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
