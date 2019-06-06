var game;
var counter = 0;
var timer;
var countDown = false;
var incorrect = 0;
var correct = 0;
var correctAnswer;

reset();

//reset function
function reset() {
    $("#timer").hide();
    $("#quiz").hide();
    $("#submit-results").hide();
    $("#finalScore").hide();
    $("#startOver").hide();
    $("#start").show();

    $(':checked').each(function () {
        $(this).removeAttr('checked');
        $('input[type="radio"]').prop('checked', false);
    })

}
//starts the on click when you hit the start button
$("#start").on("click", function () {
    $("#start").hide();
    $("#directions").hide();
    $("#quiz").show();
    $("#timer").show();
    $("#submit-results").show();
    $("#time-left").empty();
    finalScore = 0;
    var time = 120;

    $('input:checked').removeAttr('checked');

    run();

    function run() {
        intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

        time--;

        $("#time-left").text("<h4>Time Remaining: </h4><br><h2>" + time + "</h2>");

        if (time === 0) {
            clearInterval(intervalId);
            $("#time-left").text("<h2>Out of Time!</h2>");
            $("#quiz").hide();
            $("#submit-results").hide();
            $("#startOver").show();
        }
    }
})

$("#submit-results").on("click", function () {
    $("#quiz").hide();
    $("#timer").hide();
    $("#submit-results").hide();
    $("#startOver").show();
    $("#finalScore").show();
    clearInterval(intervalId);

    var radios = $('input[type="radio"]:checked');

    radios.each(function (index, radio) {
        var radioValue = parseInt(radio.value);
        finalScore += radioValue;
    })

    var Score = (parseInt(finalScore) / possibleScore).toFixed(3);
    //if/else based on how well you did.
    if (finalScore <= 3) {
        $("#finalScore").text("<h4>Hmmm Maybe you should try again... <br><br>Final Score: " + Score);
    } else if (finalScore >= 7) {
        $("#finalScore").text("<h4> WooHoo! You know so much about reptiles!!! <br><br>Final Score: " + Score);
    } else {
        $("#finalScore").text("<h4>Mabe stick with a puppy <br><br>Final: " + Score);
    }
})

$("#finalScore").on("click", function () {
    reset();
})