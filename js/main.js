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
	delay : 10,
	vMultiplier : 3,
	targetElement : {},
	sfx : {
		soundPoolUrl : ["sfx/squelch.mp3","sfx/guitar_wank.mp3","sfx/plugin.mp3","sfx/click.mp3","sfx/electric.mp3"],
    getRandom : function() {
    	return new Audio(MEPHYSTO.sfx.soundPoolUrl[Math.floor(Math.random() * this.soundPoolUrl.length)]);
    }
	},
	init : function(){
		console.info('Hi there! Looking to check out my unminified JS or uncompiled LESS?\nCheck out http://mauricemelchers.nl/js/main.js or http://mauricemelchers.nl/css/main.less\n\nAny more questions or maybe even job offers? Mail me at contact@mauricemelchers.nl ;)'); // Hello for checking the code, you sexy beast you.
		function checkState(name){
			if($('body').hasClass(name)){
				return true;
			}
		};
		if(checkState('home')){
			// if browser doesn't support devicemotion evnts use mouse location instead. Firefox somehow supports it but is being a butt about it.
	    if (window.DeviceMotionEvent===undefined || (navigator.userAgent.search("Firefox") >= 0) === true) {
	    	// we can't, use mousemove instead
				$( ".main-container" ).mousemove(MEPHYSTO.onMouseMove);
	    } else{
	    	// else register device motions
	    	MEPHYSTO.targetElement = document.getElementById('maincard');
				window.ondevicemotion = MEPHYSTO.throttle(MEPHYSTO.onDeviceMotion, 250);

	    }
		};
    $('.btnLightning').hover(function(){MEPHYSTO.sfx.getRandom().play()}, function(){});
	},
	onMouseMove : function(e){
		MEPHYSTO.sw = window.innerWidth * 0.5;
		MEPHYSTO.sh = window.innerHeight * 0.5;
		MEPHYSTO.mx = e.clientX;
		MEPHYSTO.my = e.clientY;

		MEPHYSTO.ox = Math.floor((MEPHYSTO.sw - MEPHYSTO.mx) / MEPHYSTO.sw*100) / -100;
		MEPHYSTO.oy = Math.floor((MEPHYSTO.sh - MEPHYSTO.my) / MEPHYSTO.sh*100) / 100;

		document.getElementById('maincard').style.MozTransform = "rotateX(" + MEPHYSTO.oy * 15 + "deg) rotateY(" + MEPHYSTO.ox * 20 + "deg) translate3d(0,0,0px)";
		document.getElementById('maincard').style.webkitTransform = "rotateX(" + MEPHYSTO.oy * 15 + "deg) rotateY(" + MEPHYSTO.ox * 20 + "deg) translate3d(0,0,0px)";
	},
	onDeviceMotion : function(e){
		MEPHYSTO.ax = e.accelerationIncludingGravity.x;
		MEPHYSTO.ay = e.accelerationIncludingGravity.y;
		// we're not using velocity today
		// MEPHYSTO.vy = MEPHYSTO.vy + -(MEPHYSTO.ay);
		// MEPHYSTO.vx = MEPHYSTO.vx + MEPHYSTO.ax;
		MEPHYSTO.x = parseInt(MEPHYSTO.ay * 5);
		MEPHYSTO.y = parseInt(MEPHYSTO.ax * 10);
		MEPHYSTO.targetElement.style.webkitTransform = "rotateX(" + MEPHYSTO.x + "deg) rotateY(" + MEPHYSTO.y + "deg) translate3d(0,0,0px)"
		MEPHYSTO.targetElement.style.MozTransform = "rotateX(" + MEPHYSTO.x + "deg) rotateY(" + MEPHYSTO.y + "deg) translate3d(0,0,0px)"
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
