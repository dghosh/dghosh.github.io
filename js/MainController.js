'use strict';

profile.controller('MainController', 
	['$scope', function($scope) {

		$scope.role = "Developer, UX Enthusiast, Music Producer & Photographer";
		$scope.image = "assets/img/deb.jpg";
		$scope.showAbout = false;

		$scope.roles = function() {
			$scope.showAbout = false;
		}

		$scope.about = function() {
			$scope.showAbout = true;
		}

	}
])
.directive('about', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/about.html'
	}
})