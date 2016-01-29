(function(){

	'use strict';

	define(['modules/user/user.module'], function(app) {

		app.controller('UserController', UserController);

		UserController.$inject = ['$scope'];

		function UserController ($scope) {
			$scope.name = 'User';
		}

	});

})();

