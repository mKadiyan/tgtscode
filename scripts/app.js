'use strict';

/* App Module */

var mehar = angular.module('mehar', [
  'ngRoute',
  'meharControllers',
  'meharServices',
  'MainControllers'
]);

mehar.config(['$routeProvider',
  function($routeProvider) {
    console.log('in route provider');
    $routeProvider.
      when('/:page1', {
          templateUrl: 'templates/blankTemplate.html',
          controller: 'TopPaneController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
