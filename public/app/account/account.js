(function() {
  angular.module('app').controller('Account', Account);
  Account.$inject = [
    '$scope', 
    '$rootScope',
    'signInResource',
    'signOutResource',
    'identity',
    'User',
    '$location'
  ];
  function Account($scope, $rootScope, signInResource, signOutResource, identity, User, $location) {
    $scope.signIn = signIn;
    $scope.signOut = signOut;
    $scope.identity = identity;
    
    function signIn() {
      signInResource.signIn({
        email: $scope.user.email,
        password: $scope.user.password
      }).$promise
      .then(function(data) {
        if (data.status === true) {
          toastr.success('<b>Logged in successfully!<b>');
          $scope.user = {
            email: '',
            password: ''
          };
          $scope.identity.currentUser = new User();
          angular.extend($scope.identity.currentUser, data.user);
          $scope.identity.email = data.user.email;
          $scope.identity.authenticated = true;
          console.log($scope.identity.currentUser);
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
          $location.path('/main');
        } else {
          console.log('foo');
        }
      });
    }
  }
})();