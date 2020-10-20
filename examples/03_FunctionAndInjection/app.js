(function () {
'use strict';

angular.module('DIApp', [])
    .controller('DIController', DIController);

function DIController ($scope, $filter, $injector) {
    $scope.name = "Yaakov";

    $scope.upper = function () {
        let upCase = $filter('uppercase');
        $scope.name = upCase($scope.name)
    };

    console.log($injector.annotate(DIController))
}

console.log(DIController.toString())

})();