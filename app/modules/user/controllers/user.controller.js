'use strict';
define(['modules/user/user.module'], function(app) {

	app.controller('UserController', ['$scope', function($scope) {
		$scope.name = 'User';
	}]);
});

