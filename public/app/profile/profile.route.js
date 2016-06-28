(function() {
  angular.module('app').config(profileConfig);
  profileConfig.$inject = ['$routeProvider'];
  function profileConfig($routeProvider) {
    $routeProvider.when('/profile', {
      templateUrl: 'profile/profile',
      controller: 'Profile',
      resolve: {
        auth: ['identity', function(identity) {
            if (identity.isAuthorizedAsUser()) {
              return true;
            } else {
              throw {
                message: 'no rights'
              };
            }
        }],
      }
    });
  }
})();