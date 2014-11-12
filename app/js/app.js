'use strict';

define([
	'angular',
	'filters',
	'services',
	'directives',
	'controllers',
	'angularRoute',
	], function (angular, filters, services, directives, controllers) {

		// Declare app level module which depends on filters, and services
		
		return angular.module('immersive', [
			'ngRoute',
			'immersive.filters',
			'immersive.services',
			'immersive.directives',
			'immersive.controllers'
		]);
});
