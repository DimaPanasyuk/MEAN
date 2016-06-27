(function() {
  angular.module('app').service('usersResource', usersResource);
  usersResource.$inject = ['$resource'];
  function usersResource($resource) {
    return $resource('/api/users', {}, {});
  }
})();