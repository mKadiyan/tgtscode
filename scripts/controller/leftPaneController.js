	var mainControllers = angular.module('MainControllers', []);
	mainControllers.controller('leftPaneController',['$scope', '$http',
		function($scope,$http) {
			$scope.contents ;
			$scope.topic ;
			$scope.orderField = 'position';
			$scope.display = function(topic,subtopic)
			{
				$http({
					method  : 'GET',
					url     : 'pages/'+topic+'/'+subtopic+'.html',
					timeout : 10000,
					params  : {},  // Query Parameters (GET)
					transformResponse : function(data) {
						return $.parseHTML(data);
					}
				}).success(function(data, status, headers, config) {
					var cookieName = topic+'meharSubtopic';
					$("#middlepane").html(data[0]);
					$('#leftpane div ul li').removeClass('selected');
					$('#'+subtopic).addClass('selected');
					//TODO: bad solution below
					$.cookie(cookieName,subtopic );
				});

			};
	}]);