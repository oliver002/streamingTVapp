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
  angular.module('starter', ['ionic','ngCordova'])
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
	//	$rootScope.goHome = function() {
	//		$state.go("Entries");
		//};
	}]);
}());
