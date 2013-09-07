'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('UserCtrl', ['$scope', 'User', function($scope, User) {
    $scope.users = User.query();

    $scope.destroy = function(user) {
       var oldUsers = $scope.users;

       $scope.users = [];

       angular.forEach(oldUsers, function(currentUser) {
         if (currentUser !== user) $scope.users.push(user);
       });

       User.destroy(user);
     };
  }])
  .controller('LoginCtrl', [function() {

  }]);