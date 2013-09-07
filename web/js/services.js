'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1');

//angular.module('phonecatServices', ['ngResource']).
//    factory('Phone', function($resource){
//  return $resource('/phones.json', {}, {
//    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
//  });
//});

angular.module('userServices', ['ngResource']).
    factory('User', function($resource){
  return $resource('/rest/user', {}, {
    query: {method:'GET', isArray:true},
    destroy: {method:'DELETE'}
  });
});