'use strict';
define(['view1/view1.module'], function(app) {

	app.controller('View1Ctrl', ['$scope', function($scope) {
		$scope.teste = 'ISSO È UM TESTE';
	}]);
});

