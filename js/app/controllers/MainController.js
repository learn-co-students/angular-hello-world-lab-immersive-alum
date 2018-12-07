function MainController($scope) {
  $scope.name = 'JA';
  $scope.email = 'JA@ja.com';
  $scope.phone = '1234567890';
}

angular.module('app').controller('MainController', MainController);