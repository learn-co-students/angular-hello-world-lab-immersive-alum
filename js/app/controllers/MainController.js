function MainController($scope){
  $scope.contact = {
    name: 'Shirley Zhang',
    email: 'shirleyz9402@yahoo.com',
    phone: '732-306-9873'
  }
}
angular
  .module('app')
  .controller('MainController', MainController)
