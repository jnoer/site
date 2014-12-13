'use strict';

/* Controllers */

var controllerModule = angular.module('myApp.controllers', []);

controllerModule.controller('UserCtrl', ['$scope', 'users', function($scope, users) {    //users is passed in from the $routeProvider
    $scope.users = users;

    $scope.destroy = function(index) {
       var userToDelete = $scope.users[index];

       $scope.users.splice(index, 1);

       userToDelete.remove();
     };
}]);

controllerModule.controller('UserDetailCtrl', ['$scope', '$routeParams', '$location', 'userDao', function($scope, $routeParams, $location, userDao) {
     userDao.get($routeParams.id).get().then(function(data){$scope.user = data});

     $scope.edit = function() { $location.path('editUser/' + $scope.user.id);
     };
}]);

controllerModule.controller('UserEditCtrl', ['$scope', '$location', 'user', function($scope, $location, user) {
    $scope.user = user;

    $scope.save = function() {
        $scope.user.post().then(function() {$location.path('/user/' + user.id);})
    };

    $scope.remove = function() { delete $scope.user; $location.path('/');};
}]);

controllerModule.controller('NewUserCtrl', ['$scope', '$location', 'userDao', 'Restangular', function($scope, $location, userDao, Restangular) {
    $scope.newUser = {};

    $scope.create = function()
    {
        var it = {userName:$scope.newUser.userName};
        var users = Restangular.all("rest/user");
        users.post(it);
    }
}]);

controllerModule.controller('ListCtrl', ['$scope', 'items', function($scope, items) {    //users is passed in from the $routeProvider
    $scope.items = items;

    $scope.destroy = function(index) {
        var itemToDelete = $scope.items[index];

        $scope.items.splice(index, 1);

        itemToDelete.remove();
    };
}]);