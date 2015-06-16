'use strict';

/* Controllers */

var meharControllers = angular.module('meharControllers', []);

meharControllers.controller('TopPaneController', ['$scope', '$routeParams', 'Page','Tabs',
  function($scope, $routeParams, Page, Tabs) {
    $scope.contents={};
    console.log('controller '+$routeParams.page1);
    if($routeParams.page1 === undefined || $routeParams.page1 === 'home')
    {
      console.log('I am here in controller  undefined-home '+$routeParams.page1);
      var data = Page.query(function(data)
      {
        var text = '<div id="homecontent">';
        for (var i = 0; i < data.length; i++) {
            text +='<figure><a href="#'+data[i].id+'"><img class="thumbnail" src="'
            text +=data[i].imageUrl+'" width="108px" height="90px">';
            text +='<figcaption>'+data[i].name+'</figcaption></a></figure>';
        }
        text += "</div>"
        console.log(text);
        $("#middlepane").html (text);
        $("#leftpane").hide();
      });

    }
    else
    {
      $("#leftpane").show();
      angular.element("#leftpane").scope().topic = $routeParams.page1;
      angular.element("#leftpane").scope().contents = Tabs.query({page1: $routeParams.page1});
    }

  }]);


