function MainController($scope){
  $scope.name = 'Alla'
  $scope.email = 'allagorik2901@gmail.com'
  $scope.phone = '888-888-88-88'
}

angular
  .module('app')
  .controller("MainController", MainController)