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
    // Needs more code
    alert("Not available");
}

// Learning option 1: LTO
function learnTakeOrders() {
    console.log("click");
}

// Learning option 2: LDB
function learnDescribeBusiness() {
    console.log("click");
    //No Code yet
}

// Necessary code for questions of the lessons to work
// Code for LTO
function jumpQuestionLTO() {
    if (index >= questionsLTO.length) {
        checkAnswer();
        return;
    }
    
    // Keeping track of LTO questions
    let currQuestionLTO = questionsLTO[index];
}

function submitAnswer(event) {
    event.preventDefault();
    // Need more code
}

function checkAnswerLTO() {
    let  numCorrect = 0;
    for (let i = 0; i < userAnswers.length; i++) {
        let userAnswer = userAnswers[i];
        let question = questions[i];
        if (userAnswer == question.answer) {
            numCorrect++;
        }
    }
}