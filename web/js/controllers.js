'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', 'Phone', function($scope, Phone) {
    $scope.phones = Phone.query();
  }])
  .controller('LoginCtrl', [function() {

  }]);