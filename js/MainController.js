'use strict';

profile.controller('MainController', 
	['$scope', function($scope) {

		$scope.role = "Developer, UX Enthusiast, Music Producer & Photographer";
		$scope.image = "assets/img/deb.jpg";
		$scope.showAbout = false;

	}
])
.directive('about', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/about.html'
	}
})