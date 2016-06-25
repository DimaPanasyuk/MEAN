(function() {
  angular.module('app').controller('Courses', Courses);
  Courses.$inject = ['$scope', '$rootScope'];
  function Courses($scope, $rootScope) {
    $rootScope.menuItem = 'courses';
    $scope.courses = [
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'}
    ];
  }
})();