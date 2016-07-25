'use strict';

profile.controller('MainController', 
	['$scope', function($scope) {

		$scope.role = "Developer, UX Enthusiast, Music Producer & Photographer";
		$scope.image = "assets/img/deb.jpg";
		$scope.about = false;

		$scope.about = function() {
			$scope.about = true;
		}
	}
])
.directive('about', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/about.html'
	}
})