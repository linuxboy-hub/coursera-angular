(function() {
  'use strict';
angular

.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];

function MsgController($scope) {
  $scope.name = 'Mateo';
  $scope.character = 'marie';
  $scope.changeCharacter = function () {
    if ($scope.character == 'marie') {$scope.character = 'pierre';}
    else {$scope.character = 'marie';};
  };
  $scope.message = function () {
    return "Hello there... How's it going";
  };
};

}());
