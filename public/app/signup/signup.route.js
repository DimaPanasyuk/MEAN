(function() {
  angular.module('app').config(signUpConfig);
  signUpConfig.$inject = ['$routeProvider'];
  function signUpConfig($routeProvider) {
    $routeProvider.when('/signup', {
      templateUrl: '/signup/signup',
      controller: 'SignUp'
    });
  }
})();