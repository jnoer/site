'use strict';

appModule.service('itemDao', ['Restangular', function(Restangular){
	var baseUrl = 'rest/item';

	this.getAll = function() {
		return Restangular.all(baseUrl).getList();
	};

	this.create = function(item) {
		var items = Restangular.all(baseUrl);
		items.post(item);
	}
}]);