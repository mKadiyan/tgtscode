'use strict';

/* Services */

var meharServices = angular.module('meharServices', ['ngResource']);

meharServices.factory('Page', ['$resource',
  function($resource){
    console.log('in service '+ ':page1');
    return $resource('pages/:page1.json', {}, {
      query: {method:'GET', params:{page1:'home'}, isArray:true}
    });
  }]);
