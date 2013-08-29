'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', 'User', function($scope, User) {
    $scope.users = User.query();
  }])
  .controller('LoginCtrl', [function() {

  }]);