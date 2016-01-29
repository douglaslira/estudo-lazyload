'use strict';
define(['angular', 'common/makeModuleLazyLoadable', 'modules/layout/layout.route'], function(angular, lazy, route) {

    var app = angular.module('myApp.layout', []);

    lazy('myApp.layout');

    app.config(route);

    return app;
});

