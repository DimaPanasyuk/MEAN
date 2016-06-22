angular.module('app', ['ngRoute', 'ngResource']);

angular.module('app')
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/users', {
      templateUrl: '/partials/users',
      controller: 'Users'
    })
  }])
  .controller('App', ['$scope', function($scope) {
    $scope.name = 'Dima';
  }])
  .controller('Users', ['$scope', function($scope) {
    
  }])