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
    $routeProvider.
        when('/', {
          templateUrl: 'templates/blankTemplate.html',
          controller: 'TopPaneController'
        }).
        when('/:page1', {
          templateUrl: 'templates/blankTemplate.html',
          controller: 'TopPaneController'
        }).
        when('/:page1/:page2', {
            templateUrl: 'templates/blankTemplate.html',
            controller: 'TopPaneController'
        }).
      otherwise({
        redirectTo: '/'
      });
  }]);
