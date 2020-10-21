(function () {
'use strict';

angular.module('CounterApp', [])
    .controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {
  $scope.onceCounter = 0;
  $scope.counter = 0;
  $scope.name = "Yaakov";

  $scope.showNumberOfWatchers = function () {
    console.log("# of Watchers: ", $scope.$$watchersCount);
  };
  $scope.countOnce = function () {
    $scope.onceCounter = 1;
  };
  $scope.upCounter = function () {
    $scope.counter++;
  };
  $scope.$watch(function () {
    console.log("Digest Loop Fired!");
  })

  // $scope.upCounter = function () {
  //   $timeout(function () {
  //     $scope.counter++;
  //     console.log("Counter incremented!");
  //   }, 2000);
  // };
  // $scope.upCounter = function () {
  //   setTimeout(function () {
  //     $scope.$apply(function () {
  //       $scope.counter++;
  //       console.log("Counter incremented!");
  //     });
  //   }, 2000);
  // };
  // $scope.upCounter = function () {
  //   setTimeout(function () {
  //     $scope.counter++;
  //     console.log("Counter incremented!");
  //     $scope.$digest();
  //   }, 2000);
  // };

}

})();