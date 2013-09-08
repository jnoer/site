angular.module('myApp.data', ['ngResource']).
    factory('User', function($resource){
      return $resource('/rest/user', {}, {
//        query: {method:'GET', isArray:true},
        query: {method:'GET', params:{userId:'user'}, isArray:true},
        destroy: {method:'DELETE'}
      });
    });