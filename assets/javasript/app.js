    
var finalScore = 0;
var possibleScore = 10;
var intervalId;
reset();
$("#directions").html("<h5>See how much you know about the wonderful reptiles of our world</h5>");



function reset() {
    $("#timer").hide();
    $("#quiz").hide();
    $("#submit-results").hide();
    $("#finalScore").hide();
    $("#playAgain").hide();
    $("#directions").show();
    $("#start").show();

    $(':checked').each(function () {
        $(this).removeAttr('checked');
        $('input[type="radio"]').prop('checked', false);
    })

}

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

        $("#time-left").html("<h4>Time Remaining: </h4><br><h2>" + time + "</h2>");

        if (time === 0) {
            clearInterval(intervalId);
            $("#time-left").html("<h2>Time's Up!</h2>");
            $("#quiz").hide();
            $("#submit-results").hide();
            $("#playAgain").show();
        }
    }
})

$("#submit-results").on("click", function () {
    $("#quiz").hide();
    $("#timer").hide();
    $("#submit-results").hide();
    $("#playAgain").show();
    $("#finalScore").show();
    clearInterval(intervalId);

    var radios = $('input[type="radio"]:checked');

    radios.each(function (index, radio) {
        var radioValue = parseInt(radio.value);
        finalScore += radioValue;
    })

    var score = (parseInt(finalScore) / possibleScore).toFixed(3);

    if (finalScore <= 3) {
        $("#finalScore").html("<h4>Maybe you need to try a pet rock? <br><br>Score: </h4>" + score);
    } else if (finalScore >= 7) {
        $("#finalScore").html("<h4>Great Job! You're ready for a dragon! <br><br>Score: </h4>" + score);
    } else {
        $("#finalScore").html("<h4> Please don't adopt a reptile! <br><br>Score: </h4>" + score);
    }
})

$("#playAgain").on("click", function () {
    reset();
})