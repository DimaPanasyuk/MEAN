(function() {
  angular.module('app', ['ngRoute', 'ngResource']);
})();
(function() {
  angular.module('app')
    .constant('conf', { templates: 'partials'})
    .config(['$routeProvider', '$locationProvider', 
      function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
    }])
})();
(function() {
  angular.module('app').controller('Courses', Courses);
  Courses.$inject = ['$scope', '$rootScope'];
  function Courses($scope, $rootScope) {
    $rootScope.menuItem = 'courses';
  }
})();
(function() {
  angular.module('app').config(coursesConfig);
  coursesConfig.$inject = ['conf', '$routeProvider'];
  function coursesConfig(conf, $routeProvider) {
    $routeProvider.when('/courses', {
      templateUrl: '/courses/courses',
      controller: 'Courses'
    })
  }
})();
(function() {
  angular.module('app').controller('Main', Main);
  Main.$inject = ['$scope', '$rootScope'];
  function Main($scope, $rootScope) {
    $rootScope.menuItem = 'main';
    $scope.courses = [
      {name: 'course1', value: 'yep1'},
      {name: 'course1', value: 'yep1'},
      {name: 'course1', value: 'yep1'},
      {name: 'course1', value: 'yep1'},
      {name: 'course1', value: 'yep1'},
      {name: 'course1', value: 'yep1'},
      {name: 'course1', value: 'yep1'},
      {name: 'course1', value: 'yep1'}
    ];
    $scope.users = [
      {name: 'user1', age: 18},
      {name: 'user1', age: 18},
      {name: 'user1', age: 18},
      {name: 'user1', age: 18},
      {name: 'user1', age: 18},
      {name: 'user1', age: 18},
      {name: 'user1', age: 18},
      {name: 'user1', age: 18},
      {name: 'user1', age: 18},
      {name: 'user1', age: 18},
      {name: 'user1', age: 18},
      {name: 'user1', age: 18},
    ]
  }
})();
(function() {
  angular.module('app').config(mainConfig);
  mainConfig.$inject = ['conf', '$routeProvider'];
  function mainConfig(conf, $routeProvider) {
    $routeProvider.when('/main', {
      templateUrl: '/main/main',
      controller: 'Main'
    })
  }
})();
(function() {
  angular.module('app').controller('Videos', Videos);
  Videos.$inject = ['$scope', '$rootScope'];
  function Videos($scope, $rootScope) {
    $rootScope.menuItem = 'videos';
  }
})();
(function() {
  angular.module('app').config(videosConfig);
  videosConfig.$inject = ['conf', '$routeProvider'];
  function videosConfig(conf, $routeProvider) {
    $routeProvider.when('/videos', {
      templateUrl: '/videos/videos',
      controller: 'Videos'
    })
  }
})();