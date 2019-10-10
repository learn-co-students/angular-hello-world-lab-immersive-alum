function MainController($scope) {
  $scope.contact = {
    name: "Rebecca",
    age: "24"
  };
}

angular
  .module('app')
  .controller('MainController', MainController); 