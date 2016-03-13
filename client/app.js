var app = angular.module('tuesdayApp', []);


app.controller('MainController', ['$scope', function($scope){
    $scope.greeting = "Hello Epsilon!";
}]);

app.controller('DoubleController', ['$scope', function($scope){
    $scope.pretzel = 123;
    $scope.double = function(value){
       return value * 2;
    };

}]);

app.controller('SpicyController', ['$scope', '$http', function($scope, $http){

    $scope.customSpice = "Weeeeeeee";
    $scope.spice = 'not';

    $scope.changeSpice = function(newSpice){
        $scope.spice = newSpice;
    };

    $scope.changeEmptySpice = function(){
        console.log('clicked');

        var params = JSON.stringify({params: {id:1}});

        var id = 1;

        $http.get("/kittehs/" + id, {params: params});
    }

}]);

app.controller('OneController', ['$scope', function($scope){
    $scope.timeOfDay = "morning";
    $scope.person = "Joel";
}]);

app.controller('TwoController', ['$scope', function($scope){
    $scope.timeOfDay = "afternoon";
}]);

app.controller('ThreeController', ['$scope', function($scope){
    $scope.person = "Kristy";
}]);
