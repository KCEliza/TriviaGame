var game;
var counter = 0;
var time = 120;
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
//starts the game on the click of ID start
$("#start").on("click", startGame);

//when the game starts you need to hide start button, start timer, display first question
function startGame() {
    $("#start").hide();
    countDown = true;
    timer = setInterval(timerDown, 1000);
    gameQuestions();

}

//function for timerDown needs to make the timer count down from 120, and stop at 0
function timerDown() {
    $("#display").text(time);
    time--;
    if (time === 0) {
        clearInterval(timer);
        //display betweenScreen of unanswered here
        unanswered++;
    }
}

//function for gameQuestions needs to display one question at a time, corresponding answers, called in startGame.
function gameQuestions() {
    var answerCounter = questions[counter].answers;
    var options = answerCounter.answer;

    $("#question").text(questions[counter].question);


    for (var i = 0; i < questions[counter].answers.length; i++) {

        var optionChoice = $("<p>").text(questions[counter].answers[i].answer);
        //attr sets the value of true to the answers, without displaying which answer is true or false
        optionChoice.attr("answerValue", questions[counter].answers[i].value);
        optionChoice.addClass("option")
        $("#options").append(optionChoice);
    }

    counter++
}
//on click of an answer, go to betweenScreen
$("body").on("click", ".option", function () {

    //if correct
    if ($("#options") === true) {
        correct++
        console.log(correct);
        //display betweenscreen correct

    }
    else{
        incorrect++
        console.log(incorrect);
        //display betweenScreen incorrect
    }
})

//betweenScreen function needs to do an if/else for which answer type is chosen and display appropriate betweenScreen
//between screen potentially unnecessary. Could create between screen in if/else of on/click?
function betweenScreen() {

}