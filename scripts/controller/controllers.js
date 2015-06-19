'use strict';

/* Controllers */

var meharControllers = angular.module('meharControllers', []);

meharControllers.controller('TopPaneController', ['$scope', '$routeParams', 'Page','Tabs',
  function($scope, $routeParams, Page, Tabs) {
    $scope.contents={};

    if($routeParams.page1 === undefined || $routeParams.page1 === 'home')
    {
      var data = Page.query(function(data)
      {
        var text = '<div id="homecontent">';
        for (var i = 0; i < data.length; i++) {
            text +='<figure><a href="#'+data[i].id+'"><img class="thumbnail" src="'
            text +=data[i].imageUrl+'" width="108px" height="90px">';
            text +='<figcaption>'+data[i].name+'</figcaption></a></figure>';
        }
        text += "</div>"
        $("#middlepane").html (text);
        $("#leftpane").hide();
        $('#toppanedata ul li a').removeClass('selected');
        $('#home').addClass('selected')
      });

    }
    else
    {
      $("#leftpane").show();

      angular.element("#leftpane").scope().topic = $routeParams.page1;

      angular.element("#leftpane").scope().contents = Tabs.query({page1: $routeParams.page1},function(data)
      {
        $('#toppanedata ul li a').removeClass('selected');
        $('#'+$routeParams.page1).addClass('selected');
        var subPage = data[0].link;
        //TODO: bad solution below. also check leftPaneController.js for this cookie
        var cookieName = $routeParams.page1+'meharSubtopic';
        if($.cookie(cookieName) != undefined)
        {
          subPage = $.cookie(cookieName);
        }


        $("#leftpane div ul:first-child li").addClass('selected');
        angular.element("#leftpane").scope().display($routeParams.page1,subPage);

        return data;
      });
    }

  }]);


