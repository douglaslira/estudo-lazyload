'use strict';
define(['stateDependencyResolverFor'], function(dependency) {

    return ['$stateProvider', function($stateProvider) {
        $stateProvider.state('app', {
            abstract: true,
            views: {
                '@': {
                    controller: 'View1Ctrl',
                    templateUrl: 'view1/views/view1.html',
                    resolve: dependency(['view1/controllers/view1.controller'])
                }
            }
        }).state('app.home', {
            url: '/view1',
            views: {
                'content@app': {
                    controller: 'View11Ctrl',
                    templateUrl: 'view1/views/view11.html',
                    resolve: dependency(['view1/controllers/view11.controller'])
                }
            }
        });
    }]
});