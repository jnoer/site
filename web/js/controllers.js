'use strict';

/* Controllers */

var controllerModule = angular.module('myApp.controllers', []);

//  controller('UserCtrl', ['$scope', 'User', function($scope, User) {
controllerModule.controller('UserCtrl', ['$scope', 'users', function($scope, users) {    //users is passed in from the $routeProvider; a result of MultiUserLoader
    $scope.users = users;

    $scope.destroy = function(index) {
       var userToDelete = $scope.users[index];

       $scope.users.splice(index, 1);

       userToDelete.$delete();
     };
  }]);

controllerModule.controller('UserDetailCtrl', ['$scope', '$routeParams', '$location', 'User', function($scope, $routeParams, $location, User) {
     $scope.user = User.get({id:$routeParams.id});

     $scope.edit = function() { $location.path('editUser/' + $scope.user.id);
     };
  }]);

controllerModule.controller('UserEditCtrl', ['$scope', '$location', 'user', function($scope, $location, user) {
    $scope.user = user;

    $scope.save = function() { $scope.user.$save(function(user) {
        $location.path('/user/' + user.id);
        });
    };

    $scope.remove = function() { delete $scope.user; $location.path('/');};
}]);