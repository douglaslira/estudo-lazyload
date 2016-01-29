(function(){

    'use strict';

    define(['common/stateDependencyResolverFor'], function(dependency) {

        return ['$stateProvider', function($stateProvider) {
            $stateProvider.state('app.user', {
                url: '/user',
                views: {
                    'content@app': {
                        controller: 'UserController',
                        templateUrl: 'modules/user/views/user.controller.html',
                        resolve: dependency(['modules/user/controllers/user.controller'])
                    }
                }
            });
        }]
    });

})();