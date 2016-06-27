(function() {
  angular.module('app', ['ngRoute', 'ngResource']);
})();
(function() {
  angular.module('app')
    .constant('conf', { templates: 'partials'})
    .config(['$routeProvider', '$locationProvider', 
      function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
    }])
    .run(['$rootScope', '$location', function($rootScope, $location) {
      $rootScope.$on('$routeChangeError', function(evt, current, prev, err) {
        console.log('Err', err);
        if (err) {
          $location.path('/main');
        }
      });
    }]);
})();