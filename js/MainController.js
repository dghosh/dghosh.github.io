'use strict';

profile.controller('MainController', 
	['$scope', '$http', function($scope, $http) {

		$scope.role = "Developer, UX Enthusiast, Music Producer & Photographer";
		$scope.image = "assets/img/deb.jpg";
		$scope.showAbout = false;
		$scope.showInstagram = false;
		$scope.email = "debz.ghosh23@gmail.com";

		$scope.roles = function() {
			$scope.showAbout = false;
			$scope.showInstagram = false;
		}

		$scope.about = function() {
			$scope.showAbout = true;
			$scope.showInstagram = false;
		}

		$scope.instagram = function() {
			$scope.showAbout = false;
			$scope.showInstagram = true;
		}

	}
])
.directive('about', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/about.html'
	}
})
.directive('instagram', function() {
	return {
		restrict: 'E',
		templateUrl: "js/instagram.html",
		controller: function($scope, $http) {
			var accessToken = "280227547.4ffd8a3.43c970c362be40d6bee37279ec6f5c81";
			var url = "https://api.instagram.com/v1/users/self/media/recent/?callback=JSON_CALLBACK&access_token=" + accessToken;

			$scope.getImages = function() {
				$scope.showInstagram = true;
				$scope.showAbout = false;
				
				$scope.images = [];

				var getImages = $http.jsonp(url)
				.success(function(data) {
					var imageData = data.data;
					imageData.forEach((image) => {
						$scope.images.push({
							url: image.images.thumbnail.url,
							caption: image.caption ? image.caption.text : image.user.full_name
						});
					});
				})
				.error(function(data, status) {
					console.log(status);
				});


			}

		}
	}
})
.directive('gecko', function() {
	return {
		restrict: 'E',
		templateUrl: "js/gecko.html"
	}
})