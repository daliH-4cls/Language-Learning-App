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

// Lesson for  Learning to Describe Business/ LDB
let questionsLDB = [
    {
        question: "What is this person talking about?",
        example: "Me gustaría conocer su modelo de negocio.",
        option1: "I would not like to know about your job.",
        option2: "I would like to know about your life.",
        option3: "I would like to know your business model.",
        answer: "I would like to know your business model."
    },
    {
        question: "How do you respond to this question?",
        example: "¿Quiénes son tus competidores?",
        option1: "Mis competidores son Fry's y Sprouts.",
        option2: "Mis competidores son mis amigos.",
        option3: "Mis competidores son mi familia.",
        answer: "Mis competidores son Fry's y Sprouts."
    }
]

// Storing user answers
let userAnswer = [];
// Storing and keeping track of questions for each sub-lesson
let index = 0;
let currQuestionLDB = questionsLDB;

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

function submitAnswer(event) {
    event.preventDefault();

    let option1 = document.getElementById("option1");
    let option2 = document.getElementById("option2");
    let option3 = document.getElementById("option3");

     if (option1.checked) {
        console.log("Option1 picked");
        userAnswer.push(questionsLTO.option1);
        option1.checked = false;
    }
    else if (option2.checked) {
        console.log("Option2 picked");
        userAnswer.push(questionsLTO.option2);
        option2.checked = false;
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

function checkAnswerLTO() {
    let  numCorrect = 0;
    for (let i = 0; i < userAnswer.length; i++) {
        let Answer = userAnswer[i];
        let question = questionsLTO[i];
        if (Answer == question.answer) {
            numCorrect++;
        }
    }

    //Standard protcal (correct answers and start over)
    alert("You have " + numCorrect + "/ " + questionsLTO.length);

    index = 0;
    userAnswer = [];
    jumpQuestionLTO();
}

// CODE BELOW FOR LDB- Pretty much same coding as LTO but for LDB

// Onclick learning option 2: LDB
function learnDescribeBusiness() {
    console.log("click");
    //No Code yet
}