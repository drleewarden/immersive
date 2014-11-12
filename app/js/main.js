'use strict';

require.config({
	paths: {
		angular: '../bower_components/angular/angular',
		jQuery: '../bower_components/jquery/dist/jquery',
		angularRoute: '../bower_components/angular-route/angular-route',
		angularMocks: '../bower_components/angular-mocks/angular-mocks',
		text: '../bower_components/requirejs-text/text'
	},
	shim: {
		'jQuery' : {'exports' : '$'},
		'angular' : {
            deps:['jQuery'],
            'exports' : 'angular'
        },
        'base' :['jQuery', 'angular'],
		'angularRoute': ['angular'],
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		}
	},
	priority: [
		"angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
    'jQuery',
	'angular',
	'app',
	'routes',
    'base'
], function($, angular, app, routes, base) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);
    $(function() {
        base.initialize();
    });
	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});
