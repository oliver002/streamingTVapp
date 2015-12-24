  	 function playVideo(){
      //window.plugins.streamingMedia.playVideo("http://80.77.157.70/abc/hd.m3u8");
      var videoUrl = "http://80.77.157.70/abc/hd.m3u8";
      // Just play a video
      //window.plugins.streamingMedia.playVideo(videoUrl);

      // Play a video with callbacks
      var options = {
        successCallback: function() {
          console.log("Video was closed without error.");
          //alert("Video was closed without error.");
        },
        errorCallback: function(errMsg) {
          console.log("Error! " + errMsg);
          alert("Streaming is not available right now!");
        }
      };
      window.plugins.streamingMedia.playVideo(videoUrl, options);
    }

(function() {
/* global angular,window,cordova,console */
        var todoApp = angular.module('starter', ['ionic','ngCordova','rssappControllers','rssappServices']);
        
        todoApp.factory('todoFactory',function($http){
          var factory = [];
          
          factory.getTodos = function(){
            return $http.get("http://cors.io/?u=http://blabla.mk/feed/");
          }
        
            return factory;
        });
        
        todoApp.controller('todos',function($scope,todoFactory){
          
          $scope.todos = [];
          loadTodos();
          
          function loadTodos(){
            todoFactory.getTodos().success(function(data){
                courses  = x2js.xml_str2json(data);
                console.log(courses.rss.channel.item);
                $scope.todos =courses.rss.channel.item;
            });
            }
        });
		
	angular.module('starter', ['ionic','ngCordova','rssappControllers','rssappServices'])


	.constant("settings", {
		title:"Raymond Camden's Blog",
		rss:"http://feeds.feedburner.com/raymondcamdensblog"
	})

	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('Home', {
				url: '/',
				controller: 'HomeCtrl',
				templateUrl: 'partials/home.html'
			})
			.state('Entries', {
				url: '/entries',
				controller: 'EntriesCtrl',
				templateUrl: 'partials/entries.html',
			})
			.state('Entry', {
				url: '/entry/:index',
				controller: 'EntryCtrl',
				templateUrl: 'partials/entry.html',
			})
			.state('Offline', {
				url: '/offline',
				templateUrl: 'partials/offline.html'
			});

		$urlRouterProvider.otherwise("/");

	}])

	.run(['$ionicPlatform','$rootScope','$state', function($ionicPlatform, $rootScope, $state) {

		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}

		});

		$rootScope.goHome = function() {
			$state.go("Entries");
		};

	}]);
	
	

}());