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
        question: "What is this person asking about?",
        example: "",
        option1: "",
        option2: "",
        option3: "",
        answer: ""
    },
    {
        question: "How do you respond to this question?",
        example: "",
        option1: "",
        option2: "",
        option3: "",
        answer: ""
    }
]

// Storing user answers
let userAnswer = [];
// Storing and keeping track of questions
let index = 0;
let currQuestionLTO = questionsLTO;
let currQuestionLDB = questionsLDB;

// Go to the Beginner Phone Conversation lesson page
function learnPhoneConverse() {
    console.log("click");
    // No code yet
}

// Warning/ message for N/A lessons on index page
function unselectableLessons() {
    console.log("click");
    // Needs more code
    alert("Not available");
}

// Learning option 1: LTO
function learnTakeOrders() {
    console.log("click");
    //No code yet
}

// Learning option 2: LDB
function learnDescribeBusiness() {
    console.log("click");
    //No Code yet
}

// Necessary code for questions of the lessons to work
// Code for LTO
function jumpQuestionLTO() {
    // No code yet
    if (index >= questionsLTO.length) {
        //checkAnswer();
        //return;
    }
    // code here needed
}

function submitAnswer(event) {
    event.preventDefault();
    // Need more code
}

function checkAnswer() {
    //No code yet
}