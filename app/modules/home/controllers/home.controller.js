(function(){

	'use strict';

	define(['modules/home/home.module'], function(app) {

		app.controller('HomeController', HomeController);

		HomeController.$inject = ['$scope'];

		function HomeController($scope) {
			$scope.name = 'Home';
		}

	});

})();

