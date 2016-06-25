(function() {
  angular.module('app', ['ngRoute', 'ngResource']);
})();
(function() {
  angular.module('app')
    .constant('conf', { templates: 'partials'})
    .config(['$routeProvider', '$locationProvider', 
      function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
    }]);
})();