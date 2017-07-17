angular.module("quizApp", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/")
    $stateProvider
    .state("home",{
        url: "/",
        templateUrl: "./views/home/home.html",
    })
    .state("question", {
        url: "/question/:id",
        templateUrl: "./views/questions/question/question.html",
        controller: "questionCtrl"
    })
    .state("question11",{
        url: "/question11",
        templateUrl: "./views/questions/question11/question11.html"
    })
    .state("question12",{
        url: "/question12",
        templateUrl: "./views/questions/question12/question12.html"
    })
    .state("question13",{
        url: "/question13",
        templateUrl: "./views/questions/question13/question13.html",
        controller: "questionCtrl"
    })
    .state("questionX",{
        url: "/questionX",
        templateUrl: "./views/questions/question14/questionX.html",
        controller: "xCtrl"
    })
    .state("question15",{
        url: "/question15",
        templateUrl: "./views/questions/question15/question15.html"
    })
    .state("question16",{
        url: "/question16",
        templateUrl: "./views/questions/question16/question16.html",
        controller: "question16"
    })
    .state("question17",{
        url: "/question17",
        templateUrl: "./views/questions/question17/question17.html",
        controller:"questionCtrl"
    })
    .state("question18",{
        url: "/question18",
        templateUrl: "./views/questions/question18/question18.html"
    })
    .state("question19",{
        url: "/question19",
        templateUrl: "./views/questions/question19/question19.html"
    })
    .state("question20",{
        url: "/question20",
        templateUrl: "./views/questions/question20/question20.html"
    })
    .state("congratz",{
        url: "/congratz",
        templateUrl: "./views/congratz/congratz.html"
    })
    .state("incorrect", {
        url: "/incorrect",
        templateUrl: "./views/incorrect/incorrect.html"
    })
    .state("directions", {
        url: "/directions",
        templateUrl: "./views/directions/directions.html"
    })
})