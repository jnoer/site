var dataModule = angular.module('myApp.data', ['ngResource']);

dataModule.factory('User', function($resource){
    return $resource('/rest/user/:id', {id: '@id'}, {
//        query: {method:'GET', isArray:true},
//        query: {method:'GET', isArray:true},
//        delete: {method:'DELETE'}
  });
});

dataModule.factory('MultiUserLoader', ['User', '$q', function(User, $q) {
    return function() {
        var delay = $q.defer();

        User.query(
            function(users) {delay.resolve(users);},
            function() {delay.reject('Unable to fetch users');}
        );

        return delay.promise;
    };
}]);

dataModule.factory('UserLoader', ['User', '$q', '$route', function(User, $q, $route) {
    return function() {
        var delay = $q.defer();

        User.get({id:$route.current.params.id},
            function(user) {delay.resolve(user);},
            function() {delay.reject('Unable to fetch users');}
        );

        return delay.promise;
    };
}]);