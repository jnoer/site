'use strict';

appModule.service('userDao', ['Restangular', function(Restangular){
	var baseUrl = 'rest/user';

	this.get = function(userId) {
		return Restangular.one(baseUrl, userId);
	};

	this.getAll = function() {
		return Restangular.all(baseUrl).getList();
	}
}]);