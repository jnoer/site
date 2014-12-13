'use strict';

appModule.service('itemDao', ['Restangular', function(Restangular){
	var baseUrl = 'rest/item';

	this.getAll = function() {
		return Restangular.all(baseUrl).getList();
	}
}]);