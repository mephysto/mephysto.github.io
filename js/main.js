// Hello there. You checking out my code? You sexy beast.
// contact me via: contact@mauricemelchers.nl

"use strict";
var console = console || {};
var MEPHYSTO = MEPHYSTO || {
	sw : 0,
	sh : 0,
	mx : 0,
	my : 0,
	ox : 0,
	oy : 0,
	x : 0,
	y : 0,
	vx : 0,
	vy : 0,
	ax : 0,
	ay : 0,
	delay : 500,
	targetElement : {},
	sfx : {
		soundPoolUrl : [
			"sfx/squelch.mp3",
			"sfx/guitar_wank.mp3",
			"sfx/plugin.mp3",
			"sfx/click.mp3",
			"sfx/electric.mp3"
		],
    getRandom : function() {
    	return new Audio(MEPHYSTO.sfx.soundPoolUrl[Math.floor(Math.random() * this.soundPoolUrl.length)]);
    }
	},
	init : function(){
		console.info('%c Hi there! Looking to check out my unminified source files? Have a look around my Github page on https://github.com/mephysto/mephysto.github.io\n Any other questions or maybe even job offers? Mail me at contact@mauricemelchers.nl ;)', 'background: #bada55; color: #222'); 

		/* Move the card on the landing page on mouse move / device tilt */

		// TODO: Update these listeners when moving back to landingpage, after visitor starts the sesh on any other page
		if(MEPHYSTO.checkState('landing')){
			// if browser doesn't support devicemotion evnts use mouse location instead. Firefox somehow supports it but is being a butt about it.
	    MEPHYSTO.targetElement = document.getElementById('maincard');
	    if (Modernizr.touch) {
	    	// register device motions
				window.ondevicemotion = MEPHYSTO.throttle(MEPHYSTO.onDeviceMotion, MEPHYSTO.delay);
				// window.addEventListener('deviceorientation', MEPHYSTO.throttle(MEPHYSTO.onDeviceMotion, MEPHYSTO.delay));
	    } else{
	    	// we can't, use mousemove instead
				$( ".main-container" ).mousemove(MEPHYSTO.throttle(MEPHYSTO.onMouseMove, MEPHYSTO.delay));
	    }
		};
		/* Button hover sound effect */
    $('.btnLightning').mouseenter(function(){MEPHYSTO.sfx.getRandom().play()});
	},
	// check if we're on landing page
	checkState : function(name) {
		if($('body').hasClass('state-' + name)){
			return true;
		}
	},
	// calculate tilting of landing card based on cursor location
	onMouseMove : function(e){
		MEPHYSTO.sw = window.innerWidth * 0.5;
		MEPHYSTO.sh = window.innerHeight * 0.5;
		MEPHYSTO.mx = e.clientX;
		MEPHYSTO.my = e.clientY;

		MEPHYSTO.ox = Math.floor((MEPHYSTO.sw - MEPHYSTO.mx) / MEPHYSTO.sw*100) / -100;
		MEPHYSTO.oy = Math.floor((MEPHYSTO.sh - MEPHYSTO.my) / MEPHYSTO.sh*100) / 100;

		MEPHYSTO.tiltLandingCard(MEPHYSTO.oy * 15, MEPHYSTO.ox * 20);
	},
	// calculate tilting of landing card based on device tiltage
	onDeviceMotion : function(e){

		// MEPHYSTO.ax = e.beta;
		// MEPHYSTO.ay = e.gamma;
		MEPHYSTO.ax = e.accelerationIncludingGravity.x;
		MEPHYSTO.ay = e.accelerationIncludingGravity.y;
		// NYI: we're not using velocity yet
		// MEPHYSTO.vy = MEPHYSTO.vy + -(MEPHYSTO.ay);
		// MEPHYSTO.vx = MEPHYSTO.vx + MEPHYSTO.ax;
		MEPHYSTO.x = parseInt(MEPHYSTO.ay * .5);
		MEPHYSTO.y = parseInt(MEPHYSTO.ax * .10);
		MEPHYSTO.tiltLandingCard(MEPHYSTO.x, MEPHYSTO.y);
	},
	// tilt the landing card
	tiltLandingCard : function(_x, _y){
		MEPHYSTO.targetElement.style.webkitTransform = "rotateX(" + _x + "deg) rotateY(" + _y + "deg) translate3d(0,0,0px)"
		MEPHYSTO.targetElement.style.MozTransform = "rotateX(" + _x + "deg) rotateY(" + _y + "deg) translate3d(0,0,0px)"
	},
	// wait till events are done triggering before updating with callback
	debouncer: function(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	},

	// limit the amount of calls being triggered per second
	throttle : function(fn, threshhold, scope) {
	  threshhold || (threshhold = 250);
	  var last,
	      deferTimer;
	  return function () {
	    var context = scope || this;

	    var now = +new Date,
	        args = arguments;
	    if (last && now < last + threshhold) {
	      // hold on to it
	      clearTimeout(deferTimer);
	      deferTimer = setTimeout(function () {
	        last = now;
	        fn.apply(context, args);
	      }, threshhold);
	    } else {
	      last = now;
	      fn.apply(context, args);
	    }
	  };
	}
};


window.onload = MEPHYSTO.init;
