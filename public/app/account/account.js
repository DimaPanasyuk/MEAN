(function() {
  angular.module('app').controller('Account', Account);
  Account.$inject = [
    '$scope', 
    '$rootScope',
    'signInResource',
    'signOutResource',
    'identity'
  ];
  function Account($scope, $rootScope, signInResource, signOutResource, identity) {
    $scope.signIn = signIn;
    $scope.signOut = signOut;
    $scope.identity = identity;
    
    function signIn() {
      signInResource.signIn({
        username: $scope.user.email,
        password: $scope.user.password
      }).$promise
      .then(function(data) {
        if (data.status === true) {
          toastr.success('<b>Logged in successfully!<b>');
          $scope.user = {
            email: '',
            password: ''
          };
          $scope.identity.email = data.user.email;
          $scope.identity.authenticated = true;
        } else {
          toastr.error('<b>Incorrect email or password!<b>');
        }
      });
    }
    
    function signOut() {
      signOutResource.signOut({}).$promise
      .then(function(data) {
        if (data.status === true) {
          toastr.success('<b>Logged out successfully!</b>');
          $scope.identity.authenticated = false;
        } else {
          console.log('foo');
        }
      });
    }
  }
})();