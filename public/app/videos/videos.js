(function() {
  angular.module('app').controller('Videos', Videos);
  Videos.$inject = ['$scope', '$rootScope'];
  function Videos($scope, $rootScope) {
    $rootScope.menuItem = 'videos';
  }
})();