angular.module('app', ['ngRoute', 'ngResource']);

angular.module('app')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/users', {
      templateUrl: '/partials/users',
      controller: 'Users'
    })
    .otherwise({
      redirectTo: '/users'
    })
  }])
  .controller('Users', ['$scope', function($scope) {
    
  }])