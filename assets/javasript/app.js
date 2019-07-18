    
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

        $("#time-left").html("Time Remaining: " + time);

        if (time === 0) {
            clearInterval(intervalId);
            $("#time-left").html("Time's Up!");
            $("#quiz").hide();
            $("#submit-results").hide();
            $("#playAgain").show();
        }
    }
})

$("#submit-results").on("click", function (event) {
    event.preventDefault()
    $("#quiz").hide();
    $("#timer").hide();
    $("#submit-results").hide();
    $("#playAgain").show();
    $("#finalScore").show();
    clearInterval(intervalId);

    var radios = $('input[type="radio"]:checked');

    radios.each(function (index, radio) {
        console.log(index + "INDEX")
        console.log(radio.value + "RADIO")
        var radioValue = parseInt(radio.value);
        finalScore += radioValue;
    })

    var score = ((parseInt(finalScore) / possibleScore) * 100);
    console.log(score)
    if (finalScore <= 3) {
        $("#finalScore").text("Maybe you need to try a pet rock? Score: " + score);
    } else if (finalScore >= 7) {
        $("#finalScore").text("Great Job! You're ready for a dragon! Score: " + score);
    } else {
        $("#finalScore").text("Please don't adopt a reptile! Score: " + score);
    }
})

$("#playAgain").on("click", function () {
    reset();
})