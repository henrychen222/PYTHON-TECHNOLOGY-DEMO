mainApp.controller('studentController', function ($scope) {
    //ng-click event
    $scope.reset = function () {
        $scope.firstName = "Mahesh";
        $scope.lastName = "Parashar";
        $scope.email = "MaheshParashar@tutorialspoint.com";
    }

    $scope.reset();

    //write the submit here: correct
    $scope.submit = function () {
        $scope.email = $scope.firstName + $scope.lastName + "@tutorialspoint.com";
    }
});