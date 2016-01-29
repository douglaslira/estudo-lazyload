'use strict';
define(['stateDependencyResolverFor'], function(dependency) {

    return ['$stateProvider', function($stateProvider) {
        $stateProvider.state('app.detail', {
            url: '/view2',
            views: {
                'content@app': {
                    controller: 'View2Ctrl',
                    templateUrl: 'view2/views/view2.html',
                    resolve: dependency(['view2/controllers/view2.controller'])
                }
            }
        });
    }]
});