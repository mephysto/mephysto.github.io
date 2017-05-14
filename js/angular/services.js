'use strict';

/* Services */

var mephystoServices = angular.module('mephystoServices', ['ngResource']);

mephystoServices.factory('Resume', ['$resource',
  function($resource){
    return $resource('data/resume.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);

mephystoServices.factory('Work', ['$resource',
  function($resource){
    return $resource('data/work.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);