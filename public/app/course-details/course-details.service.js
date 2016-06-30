(function() {
  angular.module('app').service('courseResource', courseResource);
  courseResource.$inject = ['$resource'];
  function courseResource($resource) {
    return $resource('/api/courses/:id', {id: '@id'}, {
      getCourse: {
        method: 'GET'
      }
    });
  }
})();