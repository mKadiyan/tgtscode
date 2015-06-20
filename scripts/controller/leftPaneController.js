	var mainControllers = angular.module('MainControllers', []);
	mainControllers.controller('leftPaneController',['$scope', '$http',
		function($scope,$http) {
			$scope.contents ;
			$scope.topic ;
			$scope.orderField = 'position';
	}]);