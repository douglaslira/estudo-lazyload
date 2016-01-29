define(function(){

  return function stateDependencyResolverFor(stateConfig) {

    return {
        resolver: ['$q', '$rootScope', '$timeout', '$location', function($q, $rootScope, $timeout, $location) {
            var deferred = $q.defer();

            require(stateConfig, function() {
                $rootScope.$apply(function() {
                    deferred.resolve();
                });
            }, function (err) {
                deferred.reject(err);
            });

            return deferred.promise;
        }]
    };

  }
});