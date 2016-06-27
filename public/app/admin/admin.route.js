(function() {
  angular.module('app').config(adminConfig);
  adminConfig.$inject = ['$routeProvider'];
  function adminConfig($routeProvider) {
    $routeProvider.when('/admin', {
      templateUrl: 'admin/admin',
      controller: 'Admin',
      resolve: {
        auth: ['identity', function(identity) {
            if (identity.isAuthorized('Admin')) {
              return true;
            } else {
              throw {
                message: 'no rights'
              };
            }
        }],
        usersPromise: ['usersResource', function(usersResource) {
          return usersResource.get({}).$promise;
        }]
      }
    });
  }
})();
