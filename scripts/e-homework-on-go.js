angular.module('e-homework').config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html",
        controller : "HomeController",
        resolve : {
			loadMyCtrl : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load({
					files : [ "scripts/controllers/HomeController.js" ]
				});
			} ]
		}
	})

	.when("/guest/signin", {
        templateUrl : "views/login.html",
        controller : "LoginController",
        resolve : {
			loadMyCtrl : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load({
					files : [ "scripts/controllers/LoginController.js" ]
				});
			} ]
		}
	})

	.when("/homework/new_homework", {
        templateUrl : "views/homework/new_homework.html",
        controller : "NewHomeworkController",
        resolve : {
			loadMyCtrl : [ '$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load({
					files : [ "scripts/controllers/NewHomeworkController.js" ]
				});
			} ]
		}
	});

	$locationProvider.hashPrefix('');
});

/*app.config(function($routeProvider) {
	
	$routeProvider.when('/', {

	  templateUrl: function(rd) {
	    return 'views/home.html';
	  },

	  resolve: {
	    load: function($q, $route, $rootScope) {

	      var deferred = $q.defer();
	      var dependencies = [
	        'scripts/controllers/HomeController.js'
	      ];

	      $script(dependencies, function () {
	        $rootScope.$apply(function() {
	          deferred.resolve();
	        });
	      });

	      console.log(deferred);
	      return deferred.promise;
	    }
	  }
	});

});*/