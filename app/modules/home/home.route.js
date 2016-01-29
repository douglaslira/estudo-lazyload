'use strict';
define(['common/stateDependencyResolverFor'], function(dependency) {

    return ['$stateProvider', function($stateProvider) {
        $stateProvider.state('app.home', {
            url: '/home',
            views: {
                'content@app': {
                    controller: 'HomeController',
                    templateUrl: 'modules/home/views/home.controller.html',
                    resolve: dependency(['modules/home/controllers/home.controller'])
                }
            }
        });
    }]
});