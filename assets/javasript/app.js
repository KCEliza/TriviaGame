var game;
var counter = 0;
var time = 30;
var timer;
var countDown = false;
var incorrect = 0;
var correct = 0;
var unanswered = 0;
var correctAnswer;
var questions = [{
        question: "What is the average length of a male Black & White Argentine Tegu?",
        answers: [{
                answer: "4 feet",
                value: false
            },
            {
                answer: "4.5 feet",
                value: true
            },
            {
                answer: "5 feet",
                value: false
            },
            {
                answer: "5.5 feet",
                value: false
            }
        ]
    },
    {
        question: "Which country do panther chameleons originate from?",
        answers: [{
                answer: "China",
                value: false
            },
            {
                answer: "Brazil",
                value: false
            },
            {
                answer: "Australia",
                value: false
            },
            {
                answer: "Madagascar",
                value: true
            }
        ]
    },
    {
        question: "How many chambers does a snake have in it's heart?",
        answers: [{
                answer: "3",
                value: true
            },
            {
                answer: "2",
                value: false
            },
            {
                answer: "4",
                value: false
            },
            {
                answer: "1",
                value: false
            }
        ]
    },
    {
        question: "What is the average lifespan of a captive bred leopard gecko",
        answers: [{
                answer: "5 years",
                value: false
            },
            {
                answer: "8 years",
                value: false
            },
            {
                answer: "10 years",
                value: true
            },
            {
                answer: "15 years",
                value: false
            }
        ]
    }
]
$("#start").on("click", startGame);

$("body").on("click", "#options", function(){
   
    //if else for correct incorrect or unanswered
    //betweenScreen("correct") etc.
    //call functions created to count correct, incorrect or unanswered


});

function timerDown(){
    $("#display").text(time);
    time--;
}
 

function startGame() {
    // $("#start").hide();
     gameQuestions();
    countDown = true;
    console.log(countDown + " countDown");
    timer = setInterval(timerDown, 1000);
    
    console.log(time + " time");
}

function gameQuestions() {
    var answerCounter = questions[counter].answers;
    var options = answerCounter.answer;
    
    //loop through answerCounter
    
    
    counter++
    
}

//function between
function betweenScreen (answerGiven){
if(answerGiven === "correct"){
    //$("<p>") correct 
}
else if(answerGiven === "incorrect"){
    //$("<p>") incorrect 
    //
}

if (counter < questions.length){
    gameQuestions();
}
else{
    //endGame();
}
}
    //gameQues

//else
    //display end of game}

//function endGame

