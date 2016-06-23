(function() {
  angular.module('app').config(videosConfig);
  videosConfig.$inject = ['conf', '$routeProvider'];
  function videosConfig(conf, $routeProvider) {
    $routeProvider.when('/videos', {
      templateUrl: conf.templates + '/videos/videos',
      controller: 'Videos'
    })
  }
})();