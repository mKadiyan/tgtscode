'use strict';

/* Controllers */

var meharControllers = angular.module('meharControllers', []);

meharControllers.controller('TopPaneController', ['$scope', '$routeParams', 'Page',
  function($scope, $routeParams, Page) {
    $scope.contents={};
    console.log('I am here in TopPaneController'+$routeParams.page1);
    angular.element("#leftpane").scope().topic = $routeParams.page1;
    angular.element("#leftpane").scope().contents = Page.query();
  }]);

