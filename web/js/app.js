'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'userServices', 'ngRoute', 'ngLocale'])
  .config(['$routeProvider', function($routeProvider) {
    //$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtl'});
    $routeProvider.when('/users', {templateUrl: 'partials/users.html', controller: 'UserCtrl'});
    $routeProvider.otherwise({redirectTo: '/login'});
  }])
  .config(function($httpProvider) {

    $httpProvider.defaults.headers["delete"] = {
      'Content-Type': 'application/json;charset=utf-8'
    };

    var interceptor = ['$rootScope','$q', function(scope, $q) {

      function success(response) {
        return response;
      }

      function error(response) {
        var status = response.status;

        if (status == 401) {
          var deferred = $q.defer();
          var req = {
            config: response.config,
            deferred: deferred
          }
          scope.requests401.push(req);
          scope.$broadcast('event:loginRequired');
          return deferred.promise;
        }
        // otherwise
        return $q.reject(response);

      }

      return function(promise) {
        return promise.then(success, error);
      }

    }];
    $httpProvider.responseInterceptors.push(interceptor);
  });;

angular.module('Login', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtrl'}).
            otherwise({redirectTo:'/login'});
    }]);