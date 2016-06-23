(function() {
  angular.module('app').controller('Courses', Courses);
  Courses.$inject = ['$scope', '$rootScope'];
  function Courses($scope, $rootScope) {
    $rootScope.menuItem = 'courses';
  }
})();