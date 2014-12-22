'use strict';

export function ngMousewheel($timeout: ng.ITimeoutService): ng.IDirective {
    return {
        restrict: 'A',
        scope: { method: '&ngMousewheel'},
        link: ($scope: any, elem: JQuery, attributes: any) => {
            console.log(attributes);
            var element: HTMLElement = elem[0];
            element.onmousewheel = () => {
                $scope.method();
            };
                
        }
    };
}
 