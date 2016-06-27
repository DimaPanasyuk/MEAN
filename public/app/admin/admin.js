(function() {
  angular.module('app').controller('Admin', Admin);
  Admin.$inject = [
    '$scope', 
    '$rootScope',
    'usersPromise'
  ];
  function Admin($scope, $rootScope, usersPromise) {
    $scope.pageTitle = 'Admin page';
    usersPromise.$promise
    .then(function(data) {
      $scope.users = data.users;
    });
  }
})();