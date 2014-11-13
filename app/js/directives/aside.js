/**
 * Created by dleewarden on 13/11/14.
 */
angular.module('immersive.directives', ['immersive.services'])
    .directive('dirAside', function () {
        return {
            restrict: 'AE',
            replace: 'true',
            template: 'template for side nave'
            //templateUrl: '/wp-content/themes/arcade-basic/library/tpl/iso.html'

        };
    });