var game;
var counter = 0;
var time = 30;
var timer;
var countDown = false;
var questionNum= 0;
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

function timerDown(){
    $("#display").text(time);
    time--;

}


function startGame() {
    // $("#start").hide();
    // if(!countDown){
     gameQuestions();
    countDown = true;
    console.log(countDown + " countDown");
    timer = setInterval(timerDown, 1000);
    
    console.log(time + " time");
}
// }

function gameQuestions() {
    console.log("stuff");
    for (var i = 0; i < questions.length; i++) {
        // console.log(questions[i].question);
        $("#question").text(questions[i].question);
        for(var j = 0; j < questions[i].answers.length; j++)
        {
            console.log(questions[i].answers[j].answer);

            var optionChoice = $("<p>").text(questions[i].answers[j].answer);
            $("#options").append(optionChoice);
        }
        // while (time > 0) {

        //     $("#question").on("click", function(){
        //         console.log("string");
        //     })
        //     if (value == true) {
        //         //show you're right

        //     } else {

        //         //show you're wrong+ correct answer
        //     }
         
    }
    // else {
    //     //show you're out of time + correct answer
    //     console.log("out of time");
    // }

}


