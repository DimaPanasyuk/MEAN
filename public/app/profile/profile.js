(function() {
  angular.module('app').controller('Profile', Profile);
  Profile.$inject = ['$scope', '$rootScope'];
  function Profile($scope, $rootScope) {
    $rootScope.menuItem = 'profile';
    $scope.profile = {
      email: '',
      password: ''
    };
    console.log('profile');
  }
})();