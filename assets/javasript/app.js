var questions = [{
            question: '1. What year was california made a state?',
            answers: [{
                    answer: 'A. 1850',
                    value: true
                },
                {
                    answer: 'B. 1824',
                    value: false
                },
                {
                    answer: 'C. 1798',
                    value: false
                },
                {
                    answer: "D. 1905",
                    value: false
                }
            ]
        },
        {
            question: '2. What year was california made a state?',
            answers: [{
                    answer: 'A. 1850',
                    value: true
                },
                {
                    answer: 'B. 1824',
                    value: false
                },
                {
                    answer: 'C. 1798',
                    value: false
                },
                {
                    answer: "D. 1905",
                    value: false
                }
            ]
        },
        {
            question: '3. What year was california made a state?',
            answers: [{
                    answer: 'A. 1850',
                    value: true
                },
                {
                    answer: 'B. 1824',
                    value: false
                },
                {
                    answer: 'C. 1798',
                    value: false
                },
                {
                    answer: "D. 1905",
                    value: false
                }
            ]
        }]
        var game;
        var counter = 0;
        var clock;
        var timer = 30;
        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;

        //need another for loop inside the loop that already exists to loop through answers.
        $("#start").on("click", 
        function loop (){
            console.log("loop");
        for(var i = 0; i < questions.length; i++){
            for (var j = 0; j <answers.length; j++){
            $("#question").text(questions[i].question);
            console.log("stuff", questions[i].question);
            if(timer !== 0){
                
                if(timer === 12){//onclick is true
                        //display you are correct 3 sec correct++
                    }
                    else{
                        //incorrect +correct ans 3 sec incorrect++
                    }
            }
            else{
                //you ran out of time + correct ans for 3 seconds unanswered++

            }
            
    }
}
})

// loop();