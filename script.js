console.log("Script for INDEX and Sub-Lesson file starts here");
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

// Storing user answers
let userAnswer = [];

// Storing and keeping track of questions for each sub-lesson
let index = 0;

// Warning/ message for N/A lessons on index page
function unselectableLessons() {
    console.log("click");
    
    alert("Not available, 'Phone Conversations' only");
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

// Storing option1 array equal to answer
let answerEqualOption1 = option1.innerText == questionsLTO.answer;
// Storing the times option 1 is correct
let correctOption1 = "answerEqualOption1";

// Find correct user answer code function for option 1 and 2 of LTO
function choseCorrectLTO1() {
    if (userAnswer === correctOption1){
        option1.checked = true;
    }
    else {
        option1.checked = false
    }
}

// Storing option2 array equal to answer
let answerEqualOption2 = option2.innerText == questionsLTO.answer;
// Storing the times option 1 is correct
let correctOption2 = "answerEqualOption2";

function choseCorrectLTO2() {
    if (userAnswer === correctOption2){
        option2.checked = true;
    }
    else {
        option2.checked = false
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
    fillProgress.style.backgroundColor = "green";

    let textToStarted = document.getElementById("progress-text");
    textToStarted.innerText = "Completed- more soon";
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

// For the unselectable sub lesson because I gave up on that one
function unselectableSubLessons() {
    console.log("click");
    
    alert("Not available, 'Learn to Take Oders' only");
}
// For some reason previous code was still linked to the LTO lessons even though it shouldn't have been?