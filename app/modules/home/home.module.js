'use strict';
define(['angular', 'common/makeModuleLazyLoadable', 'modules/home/home.route'], function(angular, lazy, route) {

	var app = angular.module('myApp.home', []);

	lazy('myApp.home');

	app.config(route);

	return app;
});

