'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('UserCtrl', ['$scope', 'User', function($scope, User) {
    $scope.users = User.query();

    $scope.destroy = function(index) {
       var userToDelete = $scope.users[index];

       $scope.users.splice(index, 1);

       User.destroy(userToDelete);
     };
  }])
  .controller('UserDetailCtrl', ['$scope', '$routeParams', 'User', function() {
     $scope.user = User.query($routeParams.id);
  }])
//  .controller('LoginCtrl', [function() {
//  }])
  ;