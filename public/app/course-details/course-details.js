(function() {
  angular.module('app').controller('CourseInfo', CourseInfo);
  CourseInfo.$inject = ['$scope', '$rootScope', 'coursePromise'];
  function CourseInfo($scope, $rootScope, coursePromise) {
    coursePromise.$promise
    .then(function(data) {
      $scope.course = data;
    });
  }
})();