
var game;
var counter = 0;
var clock;
var timer = 30;
var questions = [
    {
      question: "What is the average length of a male Black & White Argentine Tegu?",
      answers: [
        { answer: "4 feet", value: false },
        { answer: "4.5 feet", value: true },
        { answer: "5 feet", value: false },
        { answer: "5.5 feet", value: false }
      ]
    },
    {
      question: "Which country do panther chameleons originate from?",
      answers: [
        { answer: "China", value: false },
        { answer: "Brazil", value: false },
        { answer: "Australia", value: false },
        { answer: "Madagascar", value: true }
      ]
    },
    {
      question: "How many chambers does a snake have in it's heart?",
      answers: [
        { answer: "3", value: true },
        { answer: "2", value: false },
        { answer: "4", value: false },
        { answer: "1", value: false }
      ]
    },
    {
      question: "What is the average lifespan of a captive bred leopard gecko",
      answers: [
        { answer: "5 years", value: false },
        { answer: "8 years", value: false },
        { answer: "10 years", value: true },
        { answer: "15 years", value: false }
      ]
    }]
