angular.module("quizApp")
.controller("mainController", function($scope, $state, $timeout, mainService){







    // $scope.getAll = function(){
    //     mainService.getAll()
    //     .then(response => {
            
    //         $scope.question = response
    //         console.log(response)
    //     })
    // }
    // $scope.getAll()
    


//   setInteral(function nextQuest() {
//        for(var i = 0; i <= 20; i++){
//            $state.go('question'+i)
//        }
//     },3000);

// function nextQuest() {
//             $state.go('question2')
       
//     }

    // $scope.submitAnswer = function(answer1, answer2) {
    //     if (answer1 === answer2){
    //         console.log(answer1,answer2)
    //         $timeout(function() {
    //             $state.go("question2")
    //         }, 3000)
    //         // $scope.showMe = !$scope.showMe;
    //         // setTimeout(nextQuest, 500);
    //         // $scope.nextQuestion = !$scope.nextQuestion;

    //     }
        
    //     else{
    //         console.log(answer1,answer2)
    //         // $scope.incorrect = !$scope.incorrect;

    //     }

    // }








})