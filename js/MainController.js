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

		$scope.instagram = function($scope, $http) {
			$scope.showInstagram = true;
			$scope.showAbout = false;
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
		template: "<p>This is instagram</p>"
	}
})