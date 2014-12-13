'use strict';


// Declare app level module
var appModule = angular.module('myApp', ['myApp.controllers', 'restangular', 'ngRoute']);  // including ngLocale to fix error, but doesn't work

appModule.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/list',
        {
            templateUrl: 'pages/partials/list.html',
            controller: 'ListCtrl',
            resolve: {  // Inject this dependency into the controller.
                items: function(itemDao) {
                    return itemDao.getAll();
                }
            }
        }
    );

    $routeProvider.when('/users',
        {
            templateUrl: 'pages/partials/users.html',
            controller: 'UserCtrl',
            resolve: {  // Inject this dependency into the controller.
                users: function(userDao) {
                    return userDao.getAll();
                }
            }
        }
    );

    $routeProvider.when('/new',
        {
            templateUrl: 'pages/partials/newUser.html',
            controller: 'NewUserCtrl'
        }
    );

    $routeProvider.when('/user/:id', {templateUrl: 'partials/userDetail.html', controller: 'UserDetailCtrl'});

    $routeProvider.when('/editUser/:id',
        {
            templateUrl: 'pages/partials/userEdit.html',
            controller: 'UserEditCtrl',
            resolve: {
                user: function(userDao, $route) {
                    return userDao.get($route.current.params.id);
                }
            }
        });

    //$routeProvider.otherwise({redirectTo: '/login'});
    $routeProvider.otherwise({redirectTo: '/list'});
}]);

appModule.config(['$httpProvider', '$locationProvider', function($httpProvider, $locationProvider) {

    // Sends content type json to avoid error on rest DELETE - doesn't work.  See http://stackoverflow.com/questions/17379447/angularjs-and-jersey-rest-delete-operation-fails-with-415-status-code
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/json;charset=utf-8';
    $locationProvider.html5Mode(true);

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
}]);