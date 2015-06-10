/**
 * Created by ravinder on 11-06-2015.
 */
var meharShared = angular.module('meharShared', []);

meharShared
    .service('SharedService', function() {
        var _dataObj ;
        return {
            dataObj: _dataObj
        };
    })