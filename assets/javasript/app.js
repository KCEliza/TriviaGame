var game;
var counter = 0;
var time = 120;
var timer;
var countDown = false;
var incorrect = 0;
var correct = 0;
var correctAnswer;

//starts the game on the click of ID start
$("#start").on("click", startGame);

//when the game starts you need to hide start button, start timer, display first question
function startGame() {
    $("#start").hide();
    countDown = true;
    timer = setInterval(timerDown, 1000);
    gameQuestions()

}

//function for timerDown needs to make the timer count down from 120, and stop at 0
function timerDown() {
    $("#display").text(time);
    time--;
    console.log(time);
    if (time == 0 ) {
        clearInterval(timer);
        endGame();
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

//on click of an answer, go to betweenScreen
$("#options").on("click", ".option", function () {
    
    //if correct
    if ($(this).attr("answerValue") == "true") {
        correct++
        console.log(correct + "!!!");
        // alert("YAY");
        betweenScreen("true");
        gameQuestions();
        
        


    }
    else{
        incorrect++
        console.log(incorrect + "$$$");
        counter++;
        betweenScreen("false");
        gameQuestions();
    }
})
}

function endGame(){
    // $("<p>").append("YOU MADE IT TO THE END!");
    // $("<p>").append("Total Correct: " + correct);
    // $("<p>").append("Total Inorrect: " + incorrect);
    
      }

function displayImage() {
    $("#image-holder").html("<img src='assets/images/correct.jpg'width='400px'>");
  }
//betweenScreen function needs to do an if/else for which answer type is chosen and display appropriate betweenScreen
function betweenScreen(answerGiven) {
if(answerGiven === "true"){
    displayImage(setTimeout, 3000);
    //add text to page You are correct
    //display image then do set timeout to clear image after three seconds
}
else{
    $("#image-holder").html("<img src='assets/images/wrong.png' />" )
    setTimeout(displayImage, 3000);
    //add text to page you are incorect + correct answer
}
}