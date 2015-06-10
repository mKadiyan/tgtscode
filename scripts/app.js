'use strict';

/* App Module */

var phonecatApp = angular.module('mehar', [
  'ngRoute'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    console.log('in route provider');
    $routeProvider.
      when('/home', {
          controller: 'scripts/topPaneController'
      }).
        when('#/', {
          controller: 'scripts/topPaneController'
        }).
      otherwise({
        redirectTo: '/'
      });
  }]);
