'use strict';

/* Controllers */

var mephystoControllers = angular.module('mephystoControllers', ['ngSanitize']);

mephystoControllers.controller('MephystoController', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    $rootScope.state = "IDLE";
  }]);
mephystoControllers.controller('LandingController', ['$scope', '$rootScope',
  function($scope, $rootScope) {
    $rootScope.state = "LANDING";
  }]);
mephystoControllers.controller('ResumeController', ['$scope', '$rootScope', 'Resume',
  function($scope, $rootScope, Resume) {
    $rootScope.state = "RESUME";
    $scope.resume = Resume.query();
  }]);
mephystoControllers.controller('WorkController', ['$scope', '$rootScope', 'Work',
  function($scope, $rootScope, Work) {
    $rootScope.state = "WORK";
    $scope.work = Work.query();
    $scope.theHTML = $scope.work.longdescription;
  }]);

