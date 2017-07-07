angular.module("quizApp", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/")
    $stateProvider
    .state("home",{
        url: "/",
        templateUrl: "./views/home/home.html"
    })
    .state("question1",{
        url: "/question1",
        templateUrl: "./views/questions/question1/question1.html"
    })
    .state("question2",{
        url: "/question2",
        templateUrl: "./views/questions/question2/question2.html"
    })
    .state("question3",{
        url: "/question3",
        templateUrl: "./views/questions/question3/question3.html"
    })
    .state("question4",{
        url: "/question4",
        templateUrl: "./views/questions/question4/question4.html"
    })
    .state("question5",{
        url: "/question5",
        templateUrl: "./views/questions/question5/question5.html"
    })
    .state("question6",{
        url: "/question6",
        templateUrl: "./views/questions/question6/question6.html"
    })
    .state("question7",{
        url: "/question7",
        templateUrl: "./views/questions/question7/question7.html"
    })
    .state("question8",{
        url: "/question8",
        templateUrl: "./views/questions/question8/question8.html"
    })
    .state("question9",{
        url: "/question9",
        templateUrl: "./views/questions/question9/question9.html"
    })
    .state("question10",{
        url: "/question10",
        templateUrl: "./views/questions/question10/question10.html"
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
        templateUrl: "./views/questions/question13/question13.html"
    })
    .state("question14",{
        url: "/question14",
        templateUrl: "./views/questions/question14/question14.html"
    })
    .state("question15",{
        url: "/question15",
        templateUrl: "./views/questions/question15/question15.html"
    })
    .state("question16",{
        url: "/question16",
        templateUrl: "./views/questions/question16/question16.html"
    })
    .state("question17",{
        url: "/question17",
        templateUrl: "./views/questions/question17/question17.html"
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
})