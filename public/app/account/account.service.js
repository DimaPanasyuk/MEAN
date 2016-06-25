(function() {
  angular.module('app').service('signInResource', signInResource);
  angular.module('app').service('signOutResource', signOutResource);
  signInResource.$inject = ['$resource'];
  function signInResource($resource) {
    return $resource('/signin', {}, {
      signIn: {
        method: 'POST'
      }
    });
  }
  signOutResource.$inject = ['$resource'];
  function signOutResource($resource) {
    return $resource('/signout', {}, {
      signOut: {
        method: 'POST'
      }
    })
  }
})();