'use strict';

require.config({
	paths: {
		angular: 'bower_components/angular/angular',
		angularRoute: 'bower_components/angular-ui-router/release/angular-ui-router',
		angularMocks: 'bower_components/angular-mocks/angular-mocks',
		text: 'bower_components/requirejs-text/text'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		}
	},
	priority: [
		"angular"
	]
});

require(['angular', 'app'], function(angular, app) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['myApp']);
		});
	}
);