'use strict';

define(['angular', 'angularRoute', 'modules/layout/layout.module', 'modules/home/home.module', 'modules/user/user.module'], function(angular) {
	return angular.module('myApp', [
		'ui.router',
		'myApp.layout',
		'myApp.home',
		'myApp.user'
	]).config(['$urlRouterProvider', function($urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
	}]);
});

