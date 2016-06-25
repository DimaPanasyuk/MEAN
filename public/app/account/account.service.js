(function() {
  angular.module('app').service('authResource', authResource);
  authResource.$inject = ['$resource'];
  function authResource($resource) {
    return $resource('/signin', {}, {
      signIn: {
        method: 'POST'
      }
    });
  }
})();