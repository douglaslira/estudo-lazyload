'use strict';
define(['angular', 'makeModuleLazyLoadable', 'view2/view2.route'], function(angular, lazy, route) {

	var app = angular.module('myApp.view2', []);

	lazy('myApp.view2');

	app.config(route);

	return app;
});

