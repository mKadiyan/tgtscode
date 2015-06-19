	var mainControllers = angular.module('MainControllers', []);
	mainControllers.controller('leftPaneController',['$scope', '$http',
		function($scope,$http) {
			$scope.contents ;
			$scope.topic ;
			$scope.orderField = 'position';
			console.log('I am here in leftPaneController');

			$scope.display = function(topic,subtopic)
			{

				$http({
					method  : 'GET',
					url     : 'pages/'+topic+'/'+subtopic+'.html',
					timeout : 10000,
					params  : {},  // Query Parameters (GET)
					transformResponse : function(data) {
						// string -> XML document object
						return $.parseHTML(data);
					}
				}).success(function(data, status, headers, config) {
					console.dir('Checknew '+ data[0]);
					console.dir('status '+ status);
					console.dir('headers '+ headers);
					console.dir('config '+ config);
					$("#middlepane").html(data[0]);
					$('#leftpane div ul li').removeClass('selected');
					$('#'+subtopic).addClass('selected');
				});

			};

			function objToString (obj) {
				var str = '';
				for (var p in obj) {
					if (obj.hasOwnProperty(p)) {
						str += obj[p];
					}
				}
				return str;
			}

	}]);