'use strict';


// Declare app level module
angular.module('myApp', ['myApp.controllers', 'myApp.data', 'ngRoute', 'ngLocale'])  // including ngLocale to fix error, but doesn't work
  .config(['$routeProvider', function($routeProvider) {
    //$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtl'});
    $routeProvider.when('/users', {templateUrl: 'partials/users.html', controller: 'UserCtrl'});
    $routeProvider.when('/user/:id', {templateUrl: 'partials/userDetail.html', controller: 'UserCtrl'});
    $routeProvider.otherwise({redirectTo: '/login'});
  }])
  .config(function($httpProvider) {

    // sends content type json to avoid error on rest calls - doesn't work
    $httpProvider.defaults.headers["DELETE"] = {
      'Content-Type': 'application/json;charset=utf-8'
    };

// Login stuff
//    var interceptor = ['$rootScope','$q', function(scope, $q) {
//
//      function success(response) {
//        return response;
//      }
//
//      function error(response) {
//        var status = response.status;
//
//        if (status == 401) {
//          var deferred = $q.defer();
//          var req = {
//            config: response.config,
//            deferred: deferred
//          }
//          scope.requests401.push(req);
//          scope.$broadcast('event:loginRequired');
//          return deferred.promise;
//        }
//        // otherwise
//        return $q.reject(response);
//
//      }
//
//      return function(promise) {
//        return promise.then(success, error);
//      }
//
//    }];
//    $httpProvider.responseInterceptors.push(interceptor);
  });