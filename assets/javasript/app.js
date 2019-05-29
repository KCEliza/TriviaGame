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
//on click of an answer, if answer value = true
//display between screen, correct++, stopTime function
$("body").on("click", ".option", function(){
   
    console.log(typeof $(this).attr("answerValue"));
    if($(this).attr("answerValue") === "true"){
        console.log("correct");
        stopTime()
        correct++;
        betweenScreen("true");
    }
    else {
        console.log("incorrect");
        stopTime();
        incorrect++;
        betweenScreen("false");
    }
    



});

function timerDown(){
    $("#display").text(time);
    time--;
    if (time === 0){
        stopTime();
        betweenScreen("unanswered");
        console.log("out of time");
    }
    

}
 function stopTime(){
    clearInterval();
    
 }

function startGame() {
    $("#start").hide();
     gameQuestions();
    countDown = true;
    console.log(countDown + " countDown");
    timer = setInterval(timerDown, 1000);
    
    console.log(time + " time");
}

function gameQuestions() {
    var answerCounter = questions[counter].answers;
    var options = answerCounter.answer;
    $("#question").text(questions[counter].question);
    for(var j = 0; j < questions[counter].answers.length; j++){
      console.log(questions[counter].answers[j].answer);

      var optionChoice = $("<p>").text(questions[counter].answers[j].answer);
      optionChoice.attr("answerValue", questions[counter].answers[j].value );
      optionChoice.addClass("option")
      $("#options").append(optionChoice);
    }
    //loop through answerCounter
    
    
    counter++
    
}

//function between
function betweenScreen (answerGiven){
    
if(answerGiven === "true"){
    $("<p>").text("YAY! You got it right!");
}
else if(answerGiven === "false"){
    //$("<p>") incorrect 
    //
}

if (counter < questions.length){
    startGame();
}
else{
    //endGame();
}
}
    //gameQues

//else
    //display end of game}

function endGame(){
    $("<p>").append("YOU MADE IT TO THE END!");
    $("<p>").append("Total Correct: " + correct);
    $("<p>").append("Total Inorrect: " + incorrect);
    $("<p>").append("Total Unanswered: " + unanswered);
}
function resetGame() {
    counter = 0;
    correctCounter = 0;
    incorrectCounter = 0;
    unansweredCounter = 0;
    timer = 30;
    startGame();
  }
