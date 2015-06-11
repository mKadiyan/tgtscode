	var mainControllers = angular.module('MainControllers', []);
	mainControllers.controller('leftPaneController', function($scope) {
		$scope.contents ;
		$scope.topic ;
		$scope.orderField = 'position';
		console.log('I am here in leftPaneController');

	});