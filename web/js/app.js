'use strict';


// Declare app level module
var myApp = angular.module('myApp', ['myApp.controllers', 'myApp.data', 'ngRoute', 'ngLocale']);  // including ngLocale to fix error, but doesn't work

myApp.config(['$routeProvider', function($routeProvider) {
    //$routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'LoginCtl'});
    $routeProvider.when('/users',
        {
            templateUrl: 'partials/users.html',
            controller: 'UserCtrl',
            resolve: {users: function(MultiUserLoader) {return MultiUserLoader();} }
        }
    );

    $routeProvider.when('/user/:id', {templateUrl: 'partials/userDetail.html', controller: 'UserDetailCtrl'});

    $routeProvider.when('/editUser/:id',
        {
            templateUrl: 'partials/userEdit.html',
            controller: 'UserEditCtrl',
            resolve: {user: function(UserLoader) {return UserLoader();} }
        });

    $routeProvider.otherwise({redirectTo: '/login'});
}]);


myApp.config(function($httpProvider) {

    // Sends content type json to avoid error on rest DELETE - doesn't work.  See http://stackoverflow.com/questions/17379447/angularjs-and-jersey-rest-delete-operation-fails-with-415-status-code
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';

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