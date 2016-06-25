(function() {
  angular.module('app').controller('Account', Account);
  Account.$inject = [
    '$scope', 
    '$rootScope',
    'authResource'
  ];
  function Account($scope, $rootScope, authResource) {
    $scope.signIn = signIn;
    
    function signIn() {
      authResource.signIn({
        username: $scope.user.email,
        password: $scope.user.password
      }).$promise
      .then(function(data) {
        if (data.status === true) {
          toastr.success('Logged in successfully!');
          $scope.authenticated = true;
        } else {
          toastr.error('There is no such user!');
        }
      });
    }
  }
})();