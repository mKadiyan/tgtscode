	var mainControllers = angular.module('MainControllers', []);
	mainControllers.controller('leftPaneController', function($scope) {
		$scope.contents ;
		$scope.topic ;
		$scope.orderField = 'position';
		console.log('I am here in leftPaneController');
		$scope.display = function(topic,subtopic)
		{
			console.log('clicked on '+topic+'--'+subtopic);
		};
	});