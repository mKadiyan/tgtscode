'use strict';

/* Controllers */

var meharControllers = angular.module('meharControllers', []);

meharControllers.controller('TopPaneController', ['$scope', '$routeParams', 'Page',
  function($scope, $routeParams, Page) {
    console.log('I am here in TopPaneController'+$routeParams.page1);
    $scope.contents = Page.query();
    console.log('contents = '+$scope.contents);
    $scope.topic = $routeParams.page1;

    console.log('contents = '+$scope.topic);
  }]);

