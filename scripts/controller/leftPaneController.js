	var mainControllers = angular.module('MainControllers', []);
	mainControllers.controller('leftPaneController', function($scope) {
		$('#leftpane div ul li').click(function(){
			console.log('clicked on rsk eher ');
		})

		$scope.contents ;
		$scope.topic ;
		$scope.orderField = 'position';
		console.log('I am here in leftPaneController');
		$scope.display = function(topic,subtopic)
		{

			 $('#leftpane div ul li').removeClass('selected');
			$('#'+subtopic).addClass('selected');
			console.log('clicked on '+topic+'--'+subtopic);
		};
	});