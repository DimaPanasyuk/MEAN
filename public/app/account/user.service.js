(function() {
  angular.module('app').service('User', User);
  User.$inject = ['$resource'];
  function User($resource) {
    var UserResource = $resource('/api/users', {id: '@id'});
    UserResource.prototype.isAdmin = function() {
      return this.roles && this.roles.indexOf('Admin') > -1;
    };
    return UserResource;
  }
})();