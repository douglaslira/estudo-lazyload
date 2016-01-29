'use strict';
define(['modules/layout/layout.module'], function(app) {

	app.controller('LayoutController', ['$scope', function($scope) {
		$scope.title = 'Sistema com RequireJS';
	}]);
});

