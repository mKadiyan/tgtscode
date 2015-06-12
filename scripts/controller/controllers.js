'use strict';

/* Controllers */

var meharControllers = angular.module('meharControllers', []);

meharControllers.controller('TopPaneController', ['$scope', '$routeParams', 'Page','Tabs',
  function($scope, $routeParams, Page, Tabs) {
    $scope.contents={};
    console.log('controller '+$routeParams.page1);
    if($routeParams.page1 === undefined)
    {
      console.log('I am here in controller  undefined '+$routeParams.page1);
      angular.element("#leftpane").scope().topic = 'home';
      angular.element("#leftpane").scope().contents = Page.query();
    }
    else
    {
      console.log('I am here in controller  = '+$routeParams.page1);
      angular.element("#leftpane").scope().topic = $routeParams.page1;
      angular.element("#leftpane").scope().contents = Tabs.query({page1: $routeParams.page1});
    }

  }]);


