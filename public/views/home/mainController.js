angular.module("quizApp")
.controller("mainController", function($scope, mainService){
    $scope.getAll = function(){
        mainService.getAll()
        .then(questions => {
            $scope.questions = questions
            console.log($scope.questions)
        })
    }
    $scope.getAll()

    $scope.showMe = false;
    $scope.myFunc = function(){
        $scope.showMe = !$scope.showMe;
    }
})