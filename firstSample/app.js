(function () {

angular.module('myFirstApp', [])
.controller('myFirstController', function ($scope) {
  $scope.name = "Mateo";
  $scope.lastName = "Jaramillo";
  $scope.sayHello = function () {
    return "Hello from a Function of AngularJS"
  }
})


})();
