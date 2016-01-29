(function(){

	'use strict';

	define(['modules/layout/layout.module'], function(app) {

		app.controller('LayoutController', LayoutController);

		LayoutController.$inject = ['$scope'];

		function LayoutController($scope) {
			$scope.title = 'Sistema com RequireJS';
		}

	});

})();

