'use strict';

define(['angular', 'services'], function(angular, services) {

	/* Directives */
	
	angular.module('immersive.directives', ['immersive.services'])
		.directive('appVersion', ['version', function(version) {
			return function(scope, elm, attrs) {
				elm.text(version);
		};
	}]);
});
