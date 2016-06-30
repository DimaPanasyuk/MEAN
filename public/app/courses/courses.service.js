(function() {
  angular.module('app').service('coursesResource', coursesResource);
  coursesResource.$inject = ['$resource'];
  function coursesResource($resource) {
    return $resource('/api/courses/:id', {id : '@id'}, {
      getCourses: {
        method: 'GET',
        isArray: true
      },
      updateCourse: {
        method: 'PUT'
      }
    });
  }
})();