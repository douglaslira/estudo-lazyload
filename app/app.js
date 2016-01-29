'use strict';

define([
	'angular',
	'angularRoute',
	'view1/view1.module',
	'view2/view2.module'
], function(angular, angularRoute, view1, view2) {
	// Declare app level module which depends on views, and components
	return angular.module('myApp', [
		'ui.router',
		'myApp.view1',
		'myApp.view2'
	]).
	config(['$urlRouterProvider', function($urlRouterProvider) {
		$urlRouterProvider.otherwise('/view1');
	}]);
});

