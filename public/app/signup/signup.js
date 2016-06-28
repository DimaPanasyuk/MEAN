(function() {
  angular.module('app').controller('SignUp', SignUp);
  SignUp.$inject = [
    '$scope', 
    '$rootScope',
    'signUpResource',
    '$location',
    'User',
    'identity'
  ];
  function SignUp($scope, $rootScope, signUpResource, $location, User, identity) {
    $rootScope.menuItem = 'signup';
    $scope.user = {
      email: '',
      password: ''
    };
    $scope.identity = identity;
    $scope.signUp = signUp;
    
    function signUp() {
      signUpResource.signUp($scope.user).$promise
      .then(function(data) {
        $scope.identity.currentUser = new User();
        angular.extend($scope.identity.currentUser, data.user);
        $scope.identity.email = data.user.email;
        $scope.identity.authenticated = true;
        toastr.success('<b>Sign up success!</b>');
        $location.path('/main');    
      })
      .catch(function(err) {
        toastr.error('<b>' + err.data.reason + '</b>');
      });
    }
  }
})();