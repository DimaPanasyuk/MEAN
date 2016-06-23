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