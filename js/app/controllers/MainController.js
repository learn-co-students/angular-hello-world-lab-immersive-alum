function MainController($scope) {
  $scope.hello = 'Hello World!'

  $scope.contact = {
    name: 'Mike Luo',
    email: 'mike@mike.mike'
  }
}

angular
  .module('app')
  .controller('MainController', MainController)
