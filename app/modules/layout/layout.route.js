'use strict';
define(['common/stateDependencyResolverFor'], function(dependency) {

    return ['$stateProvider', function($stateProvider) {
        $stateProvider.state('app', {
            abstract: true,
            views: {
                '@': {
                    controller: 'LayoutController',
                    templateUrl: 'modules/layout/views/layout.controller.html',
                    resolve: dependency(['modules/layout/controllers/layout.controller'])
                }
            }
        });
    }]
});