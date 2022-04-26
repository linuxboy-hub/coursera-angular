(function() {
  'use strict';
angular
.module('LunchApp', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.csv = ""; //model of the input
  $scope.style = "";
  $scope.placeholder = "Comma-separated items";

  $scope.check = function () {
    $scope.msg = '';
    if ($scope.csv.length == 0) {
      $scope.msg = 'Please enter data first';
      $scope.style = "color: red; border-width: 1px; border-style: solid;border-color: red;";
    }

    else {

      var size = $scope.csv.split(',').length;
      if (size <= 3) {
        $scope.msg = 'Enjoy!';
      } else {
        $scope.msg = 'Too Much!'
      }
      $scope.style = "color: green; border-width: 1px; border-style: solid;border-color: green;";
    }
  };

};

}());
