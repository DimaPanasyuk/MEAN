(function() {
  angular.module('app').config(coursesConfig);
  coursesConfig.$inject = ['conf', '$routeProvider'];
  function coursesConfig(conf, $routeProvider) {
    $routeProvider.when('/courses', {
      templateUrl: '/courses/courses',
      controller: 'Courses',
      resolve: {
        coursesPromise: ['coursesResource', function(coursesResource) {
          return coursesResource.getCourses({}).$promise;
        }]
      }
    });
  }
})();