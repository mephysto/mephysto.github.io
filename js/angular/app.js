'use strict';

/* App Module */

var mephystoApp = angular.module('mephystoApp', [
  'ngRoute',
  // 'mephystoAnimations',
  'mephystoControllers'
  // 'mephystoFilters',
  // 'mephystoServices'
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
        redirectTo: '/'
      });
  }]);