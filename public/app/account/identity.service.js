(function() {
  angular.module('app').service('identity', identity);
  identity.$inject = ['$window'];
  function identity($window) {
    var authenticated = false;
    var email = '';
    if ($window.bootstrappedUserObject) {
      authenticated = true;
      email = $window.bootstrappedUserObject.email;
    }
    return {
      authenticated: authenticated,
      email: email
    };
  }
})();