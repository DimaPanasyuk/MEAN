(function() {
  angular.module('app').config(mainConfig);
  mainConfig.$inject = ['conf', '$routeProvider'];
  function mainConfig(conf, $routeProvider) {
    $routeProvider.when('/main', {
      templateUrl: conf.templates + '/main/main',
      controller: 'Main'
    })
  }
})();