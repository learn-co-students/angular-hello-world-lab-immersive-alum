function MainController($scope) {
    $scope.things = {
        name: 'Adames',
        date: 'Today',
        time: 'Time'
    };
}

angular
    .module('app')
    .controller('MainController', MainController);