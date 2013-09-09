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

controllerModule.controller('UserDetailCtrl', ['$scope', '$routeParams', 'User', function($scope, $routeParams, User) {
     $scope.user = User.get({id:$routeParams.id});
  }]);