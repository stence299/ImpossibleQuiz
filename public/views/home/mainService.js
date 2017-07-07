angular.module("quizApp")
.service("mainService", function($http){
    this.getAll = function(){
        return $http.get("/api/questions")
        .then(response => {
            return response.data
        })
    }
})