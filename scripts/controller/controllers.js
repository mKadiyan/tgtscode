'use strict';

/* Controllers */

var meharControllers = angular.module('meharControllers', []);

meharControllers.controller('TopPaneController', ['$scope', '$routeParams', 'Page','Tabs','$http',
  function($scope, $routeParams, Page, Tabs,$http) {
    $scope.contents={};

    var  setSubTopicTabSelected = function(topic){
      $('#toppanedata ul li a').removeClass('selected');
      $('#'+topic).addClass('selected');
    };

    var  getTopicData = function (topic,flag)
    {
      $("#leftpane").show();

      angular.element("#leftpane").scope().topic = topic;

      angular.element("#leftpane").scope().contents = Tabs.query({page1: topic},function(data)
      {
        $('#toppanedata ul li a').removeClass('selected');
        $('#'+topic).addClass('selected');
        if(flag === true)
        {
          var subPage = data[0].link;
          $("#leftpane div ul:first-child li").addClass('selected');
          getSubTopicData($routeParams.page1,subPage);
        }
        return data;
      });
    };

    var  getSubTopicData = function (topic,subtopic)
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
          //TODO: bad solution below also check controller.js for this cookie
          //$.cookie(cookieName,subtopic );
        });
    };

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
    else if($routeParams.page1 != undefined && $routeParams.page2 === undefined)
    {
      getTopicData($routeParams.page1,true);
    }
    else
    {
      var topic = $routeParams.page1;
      var subTopic = $routeParams.page2;
      if(!$('#'+topic ).hasClass( "selected"))
      {
        getTopicData(topic,false);
      }
      getSubTopicData(topic,subTopic);
    }

  }]);


