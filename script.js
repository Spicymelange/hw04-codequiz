var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("question");
var startEl = document.getElementById("start");
var btn1El = document.getElementById("btn1");
var btn2El = document.getElementById("btn2");
var btn3El = document.getElementById("btn3");
var btn4El = document.getElementById("btn4");
var answerEl = document.getElementById("answer");
var btn5El = document.getElementById("btn5");
var wrapper2El = document.querySelector(".wrapper2");
var welcomeEl = document.getElementsByClassName("welcome");
var choiceEl = document.querySelectorAll(".choice");
var h1El = document.getElementsByTagName("h1");
var titleEl = document.getElementById("title");
var revealAnswer = document.querySelector(".results");
var userAnswer;
var questionIndex = 0;

var correct = 0;
var incorrect = 0;
var questionSet = [['Question 1. \nPredict the output of the following JavaScript code.\n\nvar a = "JavaScript";\nvar result = a.substring(4,5);\ndocument.write(result);','A. Sc','B. pt','C. S','D. a','C'],
['Question 2. \nPredict the output of the following JavaScript code.\n\na = 8 + "8";\ndocument.write(a);','A. 16','B. 88','C. Compilation Error','D. Run Time Error','B','Next Question'],
['Question 3. \nWhich of the following is nt a reserved word in JavaScript?\n\n','A. program','B. interface','C. throws','D. short','A'],
['Question 4. \nWhat is the correct JavaScript syntax to change the content of the HTML element below?\n\n<p id="demo">This is a demonstration.</p>','A. document.getElement("p").innerHTML = "Hello World!";','B. document.getElementByName("p").innerHTML = "Hello World!";','C. document.getElementById("demo").innerHTML = "Hello World!";','D. #demo.innerHTML = "Hello World!";','D'],
['Question 5. \nWhere is the correct place to insert a <script> tag?','A. Both the <head> and the <body> section are correct','B. The <head> section','C. The <body> section','D. At the bottom of the <body> section','D'],
['Question 6. \nWhat is the correct syntax for referring to an external script called "xxx.js"?','A. <script name="xxx.js">','B. <script src="xxx.js">','C. <script href="xxx.js">','D. <script java="xxx.js">','B'],
['Question 7. \nHow do you write "Hello World" in an alert box?','A. msgBox("Hello World");','B. alert("Hello World");','C. alertBox("Hello World");','D. msg("Hello World");','B'],
['Question 8. \nHow do you create a function in JavaScript?','A. function:myFunction()','B. function myFunction()','C. function = myFunction()','func myFunction()','B'],
'Question 9. \nWhich do-while loop will exit if x = 4 and y = 3?','A. do {} while (x=4 || y=4)','B. do {} while (x=4 && y=3)','C. do {} while (x=1 && y=4)','D. do {} while (x=1 || y=3)','C'];
var compAnswer = questionSet[questionIndex][5];

// startQuiz();



// function startQuiz (){
// //Display the question, buttons text and answer.
//     startEl.addEventListener("click", function (event){
//         displayQuestion();
//         startEl.setAttribute("style","display: none");
//         titleEl.setAttribute("style","display: none");
//         wrapper2El.setAttribute("style","display: grid");
//         for (i = 0; i < choiceEl.length; i++){
//             choiceEl[i].setAttribute("style", "display: grid");
//         }
//         for (i = 0; i < revealAnswer.length; i++){
//             revealAnswer[i].setAttribute("style", "display: grid");
//         }
//             questionEl.setAttribute("style","display: grid");
//     });
// }
//monitor choices class
// function  (){
//     for (i = 0; i < choiceEl.length; i ++){
//         console.log("top of for loop");
//     }   
// }

document.addEventListener("click", function(event){
        
        if(event.target.matches("#start")){
            console.log("start working");
            startEl.setAttribute("style","display: none");
            titleEl.setAttribute("style","display: none");
            showQuiz();
            displayQuestion();
            // for (i = 0; i < revealAnswer.length; i++){
            //     revealAnswer[i].setAttribute("style", "display: grid");
            // }
                // questionEl.setAttribute("style","display: grid");
        }
        else if(event.target.matches("#btn1")){
            console.log("btn1 case working");
            userAnswer = btn1El.textContent[0];
            for (i = 0; i < choiceEl.length; i++){
                console.log("buttons disabled");
                choiceEl[i].disabled = true; //disable buttons
            }
            if(compAnswer == userAnswer){
                correctAns();
            }
            else{
                incorrectAns();
            }
            // revealAnswer.setAttribute("style", "display: grid");
            answerEl.setAttribute("style", "display: grid");
            btn5El.setAttribute("style", "display: grid");
        }
        else if(event.target.matches("#btn2")){
            console.log("btn2 case working");
            userAnswer = btn2El.textContent[0];
            for (i = 0; i < choiceEl.length; i++){
                console.log("buttons disabled");
                choiceEl[i].disabled = true; //disable buttons
             }
             if(compAnswer == userAnswer){
                correctAns();
            }
            else{
                incorrectAns();
            }
            // revealAnswer.setAttribute("style", "display: grid");
            answerEl.setAttribute("style", "display: grid");
            btn5El.setAttribute("style", "display: grid");
        }
        
        else if(event.target.matches("#btn3")){
            console.log("btn3 case working");
            userAnswer = btn3El.textContent[0];
            for (i = 0; i < choiceEl.length; i++){
                console.log("buttons disabled");
                choiceEl[i].disabled = true; //disable buttons
            }
            if(compAnswer == userAnswer){
                correctAns();
            }
            else{
                incorrectAns();
            }
            // revealAnswer.setAttribute("style", "display: grid");
            answerEl.setAttribute("style", "display: grid");
            btn5El.setAttribute("style", "display: grid");
        }
        
        else if(event.target.matches("#btn4")){
            console.log("btn4 case working");
            userAnswer = btn4El.textContent[0];
            for (i = 0; i < choiceEl.length; i++){
                console.log("buttons disabled");
                choiceEl[i].disabled = true; //disable buttons
            }
            if(compAnswer == userAnswer){
                correctAns();
            }
            else{
                incorrectAns();
            }
            // revealAnswer.setAttribute("style", "display: grid");
            answerEl.setAttribute("style", "display: grid");
            btn5El.setAttribute("style", "display: grid");
        }

        else if(event.target.matches("#btn5")){
            console.log("btn5 case working");
            nextQuestion();
        }
});

function correctAns(){
    correct++;
    console.log(correct,incorrect);
    // revealAnswer.setAttribute("style", "display: grid");
    questionIndex++;
}

function incorrectAns(){
    incorrect++;
    console.log(correct,incorrect);
    // revealAnswer.setAttribute("style", "display: grid");
    questionIndex++;
}
function showQuiz(){
    wrapper2El.setAttribute("style","display: grid");
    for (i = 0; i < choiceEl.length; i++){
        choiceEl[i].setAttribute("style", "display: grid");
    }
    for (i = 0; i < revealAnswer.length; i++){//needed?
        revealAnswer[i].setAttribute("style", "display: grid");
    }
    questionEl.setAttribute("style","display: grid");
}

function showAnsNext(){

}

function showEndResult(){

}


// for (i = 0; i < choiceEl.length; i ++){
//     console.log("top of for loop");
//     choiceEl[i].addEventListener("click", function (event){
//     for (i = 0; i < choiceEl.length; i++){
//         console.log("buttons disabled");
//         choiceEl[i].disabled = true; //disable buttons
//     }
//     revealAnswer.setAttribute("style", "display: grid");
//     answerEl.setAttribute("style", "display: grid");
//     btn5El.setAttribute("style", "display: grid");
//     userAnswer = event.target.textContent;
//     console.log(compAnswer,userAnswer);
//     if(compAnswer == userAnswer[0]){
//         correct++;
//         console.log(correct,incorrect);
//         revealAnswer.setAttribute("style", "display: grid");
//         questionIndex++;
//         nextQuestion();
//     }
//     else{
//         incorrect++;
//         console.log(correct,incorrect);
//         revealAnswer.setAttribute("style", "display: grid");
//         questionIndex++;
//         nextQuestion();
//     }
// });
// }
function nextQuestion() {
    btn5El.setAttribute("style", "display: hidden");
    answerEl.setAttribute("style", "display: hidden");
    displayQuestion();
    for (i = 0; i < revealAnswer.length; i++){
        revealAnswer[i].setAttribute("style", "display: hidden");
    }

}

function displayQuestion(){
    questionEl.textContent = questionSet[questionIndex][0];
    btn1El.textContent = questionSet[questionIndex][1];
    console.log(questionSet[questionIndex][1]);
    btn2El.textContent = questionSet[questionIndex][2];
    console.log(questionSet[questionIndex][2]);
    btn3El.textContent = questionSet[questionIndex][3];
    console.log(questionSet[questionIndex][3]);
    btn4El.textContent = questionSet[questionIndex][4];
    console.log(questionSet[questionIndex][4]);
    answerEl.textContent = "Correct answer: " + questionSet[questionIndex][5] + "\nCorrect: " + correct + " / 9";
    for (i = 0; i < choiceEl.length; i++){
        console.log("buttons enabled");
        choiceEl[i].enabled = true; //enable buttons
    }
}
// localStorage.setItem("count", "string");
// alert(localStorage.getItem("count"));    
    
function setTime() {
    var timerInterval = startTimer(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds";

        if(secondsLeft === 0) {
            //end quiz
        }

    }, 6000);
}