'use strict';
define(['angular', 'common/makeModuleLazyLoadable', 'modules/user/user.route'], function(angular, lazy, route) {

    var app = angular.module('myApp.user', []);

    lazy('myApp.user');

    app.config(route);

    return app;
});

