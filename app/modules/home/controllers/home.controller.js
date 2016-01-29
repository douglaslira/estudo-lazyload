'use strict';
define(['modules/home/home.module'], function(app) {

	app.controller('HomeController', ['$scope', function($scope) {
		$scope.name = 'HOME';
	}]);
});

