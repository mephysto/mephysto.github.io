'use strict';

/* App Module */

var mephystoApp = angular.module('mephystoApp', [
  'ngRoute',
  // 'phonecatAnimations',

  'mephystoControllers'
  // 'phonecatFilters',
  // 'phonecatServices'
]);

mephystoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      }).
      when('/work', {
        templateUrl: 'partials/work.html',
        controller: 'WorkController'
      }).
      otherwise({
        templateUrl: 'partials/landing.html',
        controller: 'LandingController',
        redirectTo: '/home'
      });
  }]);