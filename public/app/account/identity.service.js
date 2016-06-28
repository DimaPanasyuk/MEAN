(function() {
  angular.module('app').service('identity', identity);
  identity.$inject = ['$window', 'User'];
  function identity($window, User) {
    var authenticated = false;
    var currentUser = {};
    var email = '';
    if ($window.bootstrappedUserObject) {
      currentUser = new User();
      angular.extend(currentUser, $window.bootstrappedUserObject); 
      authenticated = true;
      email = $window.bootstrappedUserObject.email;
      console.log(currentUser);
    }
    return {
      authenticated: authenticated,
      email: email,
      currentUser: currentUser,
      isAuthorized: isAuthorized,
      isAuthorizedAsUser: isAuthorizedAsUser
    };
    
    function isAuthorized(permission) {
      return this.currentUser.roles && this.currentUser.roles.indexOf(permission) > -1;
    }
    
    function isAuthorizedAsUser() {
      if (this.isAuthorized()) {
        return true; 
      } else {
        return false
      }
    }
  }
})();