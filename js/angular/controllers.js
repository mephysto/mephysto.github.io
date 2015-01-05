'use strict';

/* Controllers */

var mephystoControllers = angular.module('mephystoControllers', []);

mephystoControllers.controller('MephystoController', ['$scope',
  function($scope) {
    console.log('init');
  }]);
mephystoControllers.controller('LandingController', ['$scope',
  function($scope) {
    console.log('init landing');
  }]);
mephystoControllers.controller('ResumeController', ['$scope',
  function($scope) {
    console.log('init res');
  }]);
mephystoControllers.controller('WorkController', ['$scope',
  function($scope) {
    console.log('init work');
  }]);

