'use strict';
define(['angular', 'makeModuleLazyLoadable', 'view1/view1.route'], function(angular, lazy, route) {

    var app = angular.module('myApp.view1', []);

    lazy('myApp.view1');

    app.config(route);

    return app;
});

