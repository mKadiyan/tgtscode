'use strict';

/* Services */

var meharServices = angular.module('meharServices', ['ngResource']);

meharServices.factory('Page', ['$resource',
  function($resource){
    console.log('in Page service '+ ':page1');
    return $resource('pages/:page1.json', {}, {
      query: {method:'GET', params:{page1:'home'}, isArray:true}
    });
  }]);

meharServices.factory('Tabs', ['$resource',
  function($resource){
    console.log('in Tabs service '+ ':page1');
    return $resource('pages/:page1.json', {}, {
      query: {method:'GET', params:{page1: ':page1' }, isArray:true}
    });
  }]);
meharServices.factory('SubTabs', ['$resource',
  function($resource){
    return $resource('pages/:tab/:subtab.html', {}, {
      query: {method:'GET', transformResponse : function(response) {
        return $.parseHTML(response);
      }}
    });
  }]);
