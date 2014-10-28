var MEPHYSTO = MEPHYSTO || {
	targetDate : new Date("28 December 2014"),
	init : function(){
    setInterval(MEPHYSTO.updateContent,500);
	},
	calculateTime : function(targetDate){
	  var currentDate = new Date();
	  var fullSecondsRemaining = Math.floor((targetDate.getTime() - currentDate.getTime()) * 0.001);
	  var weeksRem = fullSecondsRemaining / 60 / 60 / 24 / 7;
	  var daysRem = weeksRem % 1 * 7;
	  var hoursRem = daysRem % 1 * 24;
	  var minutesRem = hoursRem % 1 * 60;
	  var secsRem = minutesRem % 1 * 60;
	  return {
	  	weeks 	: Math.floor(weeksRem),
	  	days 		: Math.floor(daysRem),
	  	hours 	: Math.floor(hoursRem),
	  	minutes : Math.floor(minutesRem),
	  	secs 		: Math.floor(secsRem)
	  };
	},
	updateContent : function(){
		var timeLeft = MEPHYSTO.calculateTime(MEPHYSTO.targetDate);
		$('.countdown-content').html('Dear Sarah, <br>I can\'t wait till ' +
			timeLeft.weeks + ' weeks, ' + 
			timeLeft.days + ' days, ' + 
			timeLeft.hours + ' hours, ' + 
			timeLeft.minutes + ' minutes, ' + 
			timeLeft.secs + ' seconds have passed so I can see you again... <i class="fa fa-heart"></i> <i class="fa fa-heart"></i> <i class="fa fa-heart"></i>');
		
	}
};


window.onload = MEPHYSTO.init;
		MEPHYSTO.updateContent();
