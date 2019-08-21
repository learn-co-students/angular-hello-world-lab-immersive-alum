function MainController($scope){
    $scope.name = "Matthew Talbot",
    $scope.email = "mdtalbot@gmail.com",
    $scope.phone = "201-841-7463"
}

angular
    .module('app')
    .controller('MainController', MainController)