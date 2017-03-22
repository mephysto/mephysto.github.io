// Hello there. You checking out my code? You sexy beast.
// contact me via: contact@mauricemelchers.nl
const find = (query) => {
  return document.querySelector(query);
}

const findAll = (query) => {
  return document.querySelectorAll(query);
}

const findAllListed = (query) => {
  return [].slice.call(findAll(query));
}


"use strict";
const console = console || {};
const MEPHYSTO = MEPHYSTO || {
  sw: 0,
  sh: 0,
  mx: 0,
  my: 0,
  ox: 0,
  oy: 0,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  ax: 0,
  ay: 0,
  targetElement: {},
  sfx: {
    sounds: [
      new Audio("sfx/squelch.mp3"),
      new Audio("sfx/guitar_wank.mp3"),
      new Audio("sfx/plugin.mp3"),
      new Audio("sfx/click.mp3"),
      new Audio("sfx/electric.mp3")
    ],
    getRandom: () => {
      return MEPHYSTO.sfx.sounds[Math.floor(Math.random() * MEPHYSTO.sfx.sounds.length)];
    }
  },
  init: () => {
    console.info('%cHi there! Looking to check out my unminified source files? Have a look around my Github page on https://github.com/mephysto/mephysto.github.io\n Any other questions or opportunities? Send me a mail me at contact@mauricemelchers.nl ;)', 'background: #bada55; color: #222');

    /* Move the card on the landing page on mouse move / device tilt */

    // TODO: Update these listeners when moving back to landingpage, after visitor starts the sesh on any other page
    if (MEPHYSTO.checkState('landing')) {
      // if browser doesn't support devicemotion evnts use mouse location instead. Firefox somehow supports it but is being a butt about it.
      MEPHYSTO.targetElement = document.getElementById('maincard');
      document.body.addEventListener('mousemove', MEPHYSTO.onMouseMove);
    };
    /* Button hover sound effect */
    findAllListed('.btnLightning').map((el) => {
      el.addEventListener('mouseenter', () => {
        MEPHYSTO.sfx.getRandom().play()
      });
    })
  },
  // check if we're on landing page
  checkState: (name) => {
    if (document.body.classList.contains('state-' + name)) {
      return true;
    }
  },
  // calculate tilting of landing card based on cursor location
  onMouseMove: (ev) => {
    MEPHYSTO.sw = window.innerWidth * 0.5;
    MEPHYSTO.sh = window.innerHeight * 0.5;
    MEPHYSTO.mx = ev.clientX;
    MEPHYSTO.my = ev.clientY;

    MEPHYSTO.ox = Math.floor((MEPHYSTO.sw - MEPHYSTO.mx) / MEPHYSTO.sw * 100) / -100;
    MEPHYSTO.oy = Math.floor((MEPHYSTO.sh - MEPHYSTO.my) / MEPHYSTO.sh * 100) / 100;
    MEPHYSTO.tiltLandingCard(MEPHYSTO.oy * 15, MEPHYSTO.ox * 20);
  },
  // tilt the landing card
  tiltLandingCard: (_x, _y) => {
    MEPHYSTO.targetElement.style.MozTransform = `rotateX(${_x}deg) rotateY(${_y}deg) translate3d(0,0,0px)`;
    MEPHYSTO.targetElement.style.transform = `rotateX(${_x}deg) rotateY(${_y}deg) translate3d(0,0,0px)`;
  }
};


window.onload = MEPHYSTO.init;
