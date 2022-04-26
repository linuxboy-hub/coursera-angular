(function() {
  'use strict';
angular.module("DIApp", [])
.controller("DIController", DIController);

// Para proteger de la minificación
// La minificación es el proceso de reducir el tamaño del archivo JS
// Lo hace por medio de la eliminación de los caracteres extra como espacios o saltos de linea
DIController.$inject = ['$scope', '$filter']; 

function DIController($scope, $filter) {
  $scope.name = 'Mateo';
  $scope.upper = function () {
    var upCase = $filter('uppercase'); //la funcion se llama uppercase y obedece al servicio "Filter"
    $scope.name = upCase($scope.name); //Se llama a la funcion que hemos creado
  };
}

})();
