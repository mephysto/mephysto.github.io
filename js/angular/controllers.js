'use strict';

/* Controllers */

var mephystoControllers = angular.module('mephystoControllers', []);

mephystoControllers.controller('MephystoController', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    $rootScope.state = "IDLE";
  }]);
mephystoControllers.controller('LandingController', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    $rootScope.state = "LANDING";
  }]);
mephystoControllers.controller('ResumeController', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    $rootScope.state = "RESUME";
  }]);
mephystoControllers.controller('WorkController', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    $rootScope.state = "WORK";
  }]);

