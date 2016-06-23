(function() {
  angular.module('app').config(coursesConfig);
  coursesConfig.$inject = ['conf', '$routeProvider'];
  function coursesConfig(conf, $routeProvider) {
    $routeProvider.when('/courses', {
      templateUrl: conf.templates + '/courses/courses',
      controller: 'Courses'
    })
  }
})();