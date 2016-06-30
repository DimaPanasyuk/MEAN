(function() {
  angular.module('app').controller('Courses', Courses);
  Courses.$inject = ['$scope', '$rootScope', 'coursesPromise'];
  function Courses($scope, $rootScope, coursesPromise) {
    $rootScope.menuItem = 'courses';
    coursesPromise.$promise
    .then(function(data) {
      $scope.courses = data;
    });
  }
})();