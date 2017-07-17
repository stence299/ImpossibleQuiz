angular.module("quizApp")
.service("mainService", function($http){

this.getQuestionById = function (questionId){
    console.log('from service', questionId)
    return $http.get('/api/question/' + questionId)
    }
})