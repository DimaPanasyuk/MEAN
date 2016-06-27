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
    .run(['$rootScope', '$location', function($rootScope, $location) {
      $rootScope.$on('$routeChangeError', function(evt, current, prev, err) {
        console.log('Err', err);
        if (err) {
          $location.path('/main');
        }
      });
    }]);
})();
(function() {
  angular.module('app').controller('Account', Account);
  Account.$inject = [
    '$scope', 
    '$rootScope',
    'signInResource',
    'signOutResource',
    'identity',
    'User',
    '$location'
  ];
  function Account($scope, $rootScope, signInResource, signOutResource, identity, User, $location) {
    $scope.signIn = signIn;
    $scope.signOut = signOut;
    $scope.identity = identity;
    
    function signIn() {
      signInResource.signIn({
        username: $scope.user.email,
        password: $scope.user.password
      }).$promise
      .then(function(data) {
        if (data.status === true) {
          toastr.success('<b>Logged in successfully!<b>');
          $scope.user = {
            email: '',
            password: ''
          };
          $scope.identity.currentUser = new User();
          angular.extend($scope.identity.currentUser, data.user);
          $scope.identity.email = data.user.email;
          $scope.identity.authenticated = true;
          console.log($scope.identity.currentUser);
        } else {
          toastr.error('<b>Incorrect email or password!<b>');
        }
      });
    }
    
    function signOut() {
      signOutResource.signOut({}).$promise
      .then(function(data) {
        if (data.status === true) {
          toastr.success('<b>Logged out successfully!</b>');
          $scope.identity.authenticated = false;
          $location.path('/main');
        } else {
          console.log('foo');
        }
      });
    }
  }
})();
(function() {
  angular.module('app').service('signInResource', signInResource);
  angular.module('app').service('signOutResource', signOutResource);
  signInResource.$inject = ['$resource'];
  function signInResource($resource) {
    return $resource('/signin', {}, {
      signIn: {
        method: 'POST'
      }
    });
  }
  signOutResource.$inject = ['$resource'];
  function signOutResource($resource) {
    return $resource('/signout', {}, {
      signOut: {
        method: 'POST'
      }
    })
  }
})();
(function() {
  angular.module('app').service('identity', identity);
  identity.$inject = ['$window', 'User'];
  function identity($window, User) {
    var authenticated = false;
    var currentUser = {};
    var email = '';
    if ($window.bootstrappedUserObject) {
      currentUser = new User();
      angular.extend(currentUser, $window.bootstrappedUserObject); 
      authenticated = true;
      email = $window.bootstrappedUserObject.email;
      console.log(currentUser);
    }
    return {
      authenticated: authenticated,
      email: email,
      currentUser: currentUser,
      isAuthorized: isAuthorized
    };
    
    function isAuthorized(permission) {
      return this.currentUser.roles && this.currentUser.roles.indexOf(permission) > -1;
    }
  }
})();
(function() {
  angular.module('app').service('User', User);
  User.$inject = ['$resource'];
  function User($resource) {
    var UserResource = $resource('/api/users', {id: '@id'});
    UserResource.prototype.isAdmin = function() {
      return this.roles && this.roles.indexOf('Admin') > -1;
    };
    return UserResource;
  }
})();
(function() {
  angular.module('app').controller('Admin', Admin);
  Admin.$inject = [
    '$scope', 
    '$rootScope',
    'usersPromise'
  ];
  function Admin($scope, $rootScope, usersPromise) {
    $scope.pageTitle = 'Admin page';
    usersPromise.$promise
    .then(function(data) {
      $scope.users = data.users;
    });
  }
})();
(function() {
  angular.module('app').config(adminConfig);
  adminConfig.$inject = ['$routeProvider'];
  function adminConfig($routeProvider) {
    $routeProvider.when('/admin', {
      templateUrl: 'admin/admin',
      controller: 'Admin',
      resolve: {
        auth: ['identity', function(identity) {
            if (identity.isAuthorized('Admin')) {
              return true;
            } else {
              throw {
                message: 'no rights'
              };
            }
        }],
        usersPromise: ['usersResource', function(usersResource) {
          return usersResource.get({}).$promise;
        }]
      }
    });
  }
})();

(function() {
  angular.module('app').service('usersResource', usersResource);
  usersResource.$inject = ['$resource'];
  function usersResource($resource) {
    return $resource('/api/users', {}, {});
  }
})();
(function() {
  angular.module('app').controller('Courses', Courses);
  Courses.$inject = ['$scope', '$rootScope'];
  function Courses($scope, $rootScope) {
    $rootScope.menuItem = 'courses';
    $scope.courses = [
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'},
      {title: 'course_1', desc: 'desc_1'}
    ];
  }
})();
(function() {
  angular.module('app').config(coursesConfig);
  coursesConfig.$inject = ['conf', '$routeProvider'];
  function coursesConfig(conf, $routeProvider) {
    $routeProvider.when('/courses', {
      templateUrl: '/courses/courses',
      controller: 'Courses'
    });
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