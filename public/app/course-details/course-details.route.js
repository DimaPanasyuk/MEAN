(function() {
  angular.module('app').config(courseDetailsConfig);
  courseDetailsConfig.$inject = ['$routeProvider'];
  function courseDetailsConfig($routeProvider) {
    $routeProvider.when('/courses/:id', {
      templateUrl: '/course-details/course-details',
      controller: 'CourseInfo',
      resolve: {
        coursePromise: ['$route', 'courseResource', function($route, courseResource) {
          return courseResource.getCourse({id: $route.current.params.id}).$promise;
        }]
      }
    });
  }
})();