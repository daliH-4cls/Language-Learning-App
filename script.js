console.log("Script for INDEX and Lesson file starts here");
// Only 1 of the lessons is selectable for easy coding, all are just setups

// Lesson for Learning to Take Orders/ LTO
let questionsLTO = [
    {
        question: "What is this customer ordering?",
        example: "Me gustaría una pizza de queso con Pepsi.",
        option1: "I would like cheese pizza with Pepsi.",
        option2: "I would like mushroom pizza with Pepsi.",
        option3: "I would like sicilian pizza with Cola.",
        answer: "I would like cheese pizza with Pepsi."
    },
    {
        question: "What is this customer's request?",
        example: "Me gustaría mi hamburguesa sin pepinillos.",
        option1: "I would like my burger with onions.",
        option2: "I would like my burger without pickles.",
        option3: "I would not like my burger with tomatoes.",
        answer: "I would like my burger without pickles."
    },
    {
        question: "What is this customer's needs?",
        example: "No puedo consumir cacahuetes, lácteos ni carne roja.",
        option1: "I can not have peanuts, dairy and red meat.",
        option2: "I can not have olives, almond milk and red turnips.",
        option3: "I can not have peaches, soy milk and white meat.",
        answer: "I can not have peanuts, dairy and red meat."
    }
]
// LTO is default, so non of the text has "LTO"

// Lesson for  Learning to Describe Business/ LDB
let questionsLDB = [
    {
        questionLDB: "What is this person talking about?",
        exampleLDB: "Me gustaría conocer su modelo de negocio.",
        option1LDB: "I would not like to know about your job.",
        option2LDB: "I would like to know about your life.",
        option3LDB: "I would like to know your business model.",
        answerLDB: "I would like to know your business model."
    },
    {
        questionLDB: "How do you respond to this question?",
        exampleLDB: "¿Quiénes son tus competidores?",
        option1LDB: "Mis competidores son Fry's y Sprouts.",
        option2LDB: "Mis competidores son mis amigos.",
        option3LDB: "Mis competidores son mi familia.",
        answerLDB: "Mis competidores son Fry's y Sprouts."
    }
]
// LDB is not default, so text will have "LDB"

// Storing user answers
let userAnswer = [];

// Storing and keeping track of questions for each sub-lesson
let index = 0;

// Warning/ message for N/A lessons on index page
function unselectableLessons() {
    console.log("click");
    
    alert("Not available, Phone Conversations only");
}

// Onclick learning option 1: LTO
function learnTakeOrders() {
    console.log("Lesson Learn to Take Orders selected");

    jumpQuestionLTO();
}

// Necessary code for questions of the lessons to work
// Code for LTO
function jumpQuestionLTO() {
    if (index >= questionsLTO.length) {
        checkAnswerLTO();
        return;
    }
    
    // Keeping track of LTO questions
    let currQuestionLTO = questionsLTO[index];

    // Placing in the JS text to HTML text
    let questionElement = document.getElementById("questionForLTO");
    questionElement.innerText = currQuestionLTO.question;
    questionElement.style.color = "black";

    let exampleElement = document.getElementById("exampleLTO");
    exampleElement.innerText = currQuestionLTO.example;
    exampleElement.style.color = "black";

    let option1Text = document.getElementById("option1text");
    option1Text.innerText = currQuestionLTO.option1;
    option1Text.style.color = "black";

    let option2Text = document.getElementById("option2text");
    option2Text.innerText = currQuestionLTO.option2;
    option2Text.style.color = "black";

    let option3Text = document.getElementById("option3text");
    option3Text.innerText = currQuestionLTO.option3;
    option3Text.style.color = "black";
}

// Find correct user answer code function for option 1 and 2 of LTO
// NEEDS FIXING
function choseCorrectLTO1() {
   if (option1.innerText = questionsLTO.answer) {
   option1.checked = true;
   }
   else {
    option1.checked = false;
   }
}

function choseCorrectLTO2() {
    if (option2.innerText = questionsLTO.answer) {
       option2.checked = true;
    }
    else {
       option2.checked = false;
    } 
}

// Checking answer correction and if an answer was chosen
function submitAnswer(event) {
    event.preventDefault();

    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");

    if (option1.checked) {
        console.log("Option1 picked");
        userAnswer.push(questionsLTO.option1);
        choseCorrectLTO1();
    }
    else if (option2.checked) {
        console.log("Option2 picked");
        userAnswer.push(questionsLTO.option2);
        choseCorrectLTO2();
    }
    else if (option3.checked) {
        console.log("Option3 picked");
        userAnswer.push(questionsLTO.option3);
        option3.checked = false;
    }
    else {
        alert("Answer not selected...");
        return;
    }

    // Code for answering question
    index = index + 1;

    jumpQuestionLTO();
}

// Storing progress (only once) REALLY NEEDS FIXING 
function fillingProgressLTO() {
    let fillProgress = document.getElementById("progress-fill");
    fillProgress.style.backgroundColor = rgb(39, 174, 96);
    fillProgress.style.width = "25%";

    let textToStarted = document.getElementById("progress-text");
    textToStarted.innerText = "25% complete";
}

function checkAnswerLTO() {
    let  numCorrect = 0;
    for (let i = 0; i < userAnswer.length; i++) {
        let answerSelected = userAnswer[i];
        let storeQuestion = questionsLTO[i];
        if (answerSelected == questionsLTO.answer) {
            numCorrect++;
        }
    }

    //Standard protcal (correct answers and start over + updated progress)
    alert("You have " + numCorrect + "/ " + questionsLTO.length + ". More lessons soon to arrive.");

    fillingProgressLTO();
    index = 0;
    userAnswer = [];
    jumpQuestionLTO();
}

// CODE BELOW FOR LDB- Pretty much same coding as LTO but for LDB

// Onclick learning option 2: LDB
