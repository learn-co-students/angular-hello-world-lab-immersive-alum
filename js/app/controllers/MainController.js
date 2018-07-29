angular
  .module('app')
  .controller('MainController', MainController);

  function MainController($scope) {
    $scope.name = 'Jon'
    $scope.email = 'jon@jon.com'
    $scope.phone = '555-555-5555'
  }
