'use strict';

profile.controller('MainController', 
	['$scope', function($scope) {

		var role = "Developer, UX Enthusiast, Music Producer & Photographer";
		$scope.role = role;
		$scope.image = "assets/img/deb.jpg";

		$scope.frontPage = function() {
			// $scope.about = false;
			$scope.role = role;
		}

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