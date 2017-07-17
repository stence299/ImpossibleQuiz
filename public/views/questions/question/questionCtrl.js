angular.module("quizApp").controller("questionCtrl", function($scope, $state, $stateParams, $timeout, mainService) {
    var questionId = parseInt($stateParams.id);
   
    console.log("is this a number", parseInt($stateParams.id))
   
    


    mainService.getQuestionById( parseInt(questionId) )
    .then(function(response) {
        console.log('show me all of it', response.data)
        console.log('we want just this',response.data[0])
        $scope.question = response.data[0]

    })
        //ask how to check if state is the state
 
    $scope.hoverRight = function(){
        $state.go("questionX")
    }
    $scope.hoverWrong = function(){
        $state.go("incorrect")
    }
//TO DO: SUBMIT 
    $scope.submit = function(answerChoice) {
        
        if(parseInt($scope.question.nextQuestion) === 12 && answerChoice === $scope.question.correctAnswer){
                $state.go('question12')
        } 
        else if(parseInt($scope.question.nextQuestion) === 13 && answerChoice === $scope.question.correctAnswer){
                $state.go('question13')
        } 
        
        else if(parseInt($scope.question.nextQuestion) === 20 && answerChoice === $scope.question.correctAnswer){
                $state.go('question20')
        } 
        
        else if (answerChoice === $scope.question.correctAnswer) {
            $timeout(function() {
                $state.go("question", {id: parseInt($scope.question.nextQuestion)})
            }, 500)
        } else {
            $state.go("incorrect")
        }   
    }
})
.controller("xCtrl", function($scope, $state, $timeout){
    $scope.question = {
            answerChoice1: "Go to 13",
            answerChoice2: "Go to 14",
            answerChoice3: "Go to 15",
            answerChoice4: "Go to 16",
            question: "I hope you've been paying attention to the question numbers!!",
            correctAnswer: "Go to 15",
            nextQuestion: "15",
        }
    $scope.submit = function(answerChoice) {
         
        if(parseInt($scope.question.nextQuestion) === 15 && answerChoice === $scope.question.correctAnswer){
                $state.go('question15')
        }  else {
            $state.go("incorrect")
        } 
    }      
})
.controller("question16", function($scope, $state){
    $scope.goto17 = function(){
        $state.go("question", {id: 17});
    }

})