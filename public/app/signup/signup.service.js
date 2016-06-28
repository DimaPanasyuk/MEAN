(function() {
  angular.module('app').service('signUpResource', signUpResource);
  signUpResource.$inject = ['$resource'];
  function signUpResource($resource) {
    return $resource('/signup', {}, {
      signUp: {
        method: 'POST'
      }
    });
  }
})();