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
var revealAnswer = document.querySelectorAll(".results");
var endGameEl = document.querySelectorAll(".result-page");
var submitEl = document.getElementById("submit");
var userAnswer;
var questionIndex = 0;
var correct = 0;
var incorrect = 0;
var userInitials = "";


var questionSet = [['Question 1. \nPredict the output of the following JavaScript code.\n\nvar a = "JavaScript";\nvar result = a.substring(4,5);\ndocument.write(result);','A. Sc','B. pt','C. S','D. a','C'],
['Question 2. \nPredict the output of the following JavaScript code.\n\na = 8 + "8";\ndocument.write(a);','A. 16','B. 88','C. Compilation Error','D. Run Time Error','B','Next Question'],
['Question 3. \nWhich of the following is nt a reserved word in JavaScript?\n\n','A. program','B. interface','C. throws','D. short','A'],
['Question 4. \nWhat is the correct JavaScript syntax to change the content of the HTML element below?\n\n<p id="demo">This is a demonstration.</p>','A. document.getElement("p").innerHTML = "Hello World!";','B. document.getElementByName("p").innerHTML = "Hello World!";','C. document.getElementById("demo").innerHTML = "Hello World!";','D. #demo.innerHTML = "Hello World!";','D'],
['Question 5. \nWhere is the correct place to insert a <script> tag?','A. Both the <head> and the <body> section are correct','B. The <head> section','C. The <body> section','D. At the bottom of the <body> section','D'],
['Question 6. \nWhat is the correct syntax for referring to an external script called "xxx.js"?','A. <script name="xxx.js">','B. <script src="xxx.js">','C. <script href="xxx.js">','D. <script java="xxx.js">','B'],
['Question 7. \nHow do you write "Hello World" in an alert box?','A. msgBox("Hello World");','B. alert("Hello World");','C. alertBox("Hello World");','D. msg("Hello World");','B'],
['Question 8. \nHow do you create a function in JavaScript?','A. function:myFunction()','B. function myFunction()','C. function = myFunction()','func myFunction()','B'],
['Question 9. \nWhich do-while loop will exit if x = 4 and y = 3?','A. do {} while (x=4 || y=4)','B. do {} while (x=4 && y=3)','C. do {} while (x=1 && y=4)','D. do {} while (x=1 || y=3)','C']];
var compAnswer = "";
// setTime();
document.addEventListener("click", function(event){
    console.log("________________");
    console.log(event.target);

        if(event.target.matches("#start")){
            console.log("start working");
            startEl.setAttribute("style","display: none");
            titleEl.setAttribute("style","display: none");
            displayQuestion();
            showQuiz();
        }
        else if(event.target.matches("#btn1")){
            compAnswer = questionSet[questionIndex][5];
            userAnswer = btn1El.textContent;
            console.log("btn1 case working");
            if(compAnswer == userAnswer[0]){
                correctAns();
                if (questionIndex < questionSet.length){
                    showAnsandButton();
                }
            }
            else{
                incorrectAns();
                if (questionIndex < questionSet.length){
                    showAnsandButton();
                }
            }
            console.log(compAnswer,userAnswer);
        }
        else if(event.target.matches("#btn2")){
            compAnswer = questionSet[questionIndex][5];
            userAnswer = btn2El.textContent[0];
            console.log("btn2 case working");
            if(compAnswer == userAnswer){
                correctAns();
                if (questionIndex < questionSet.length){
                    showAnsandButton();
                }
            }
            else{
                incorrectAns();
                if (questionIndex < questionSet.length){
                    showAnsandButton();
                }
            }
            console.log(compAnswer,userAnswer);
        }
        
        else if(event.target.matches("#btn3")){
            compAnswer = questionSet[questionIndex][5];
            userAnswer = btn3El.textContent[0];
            console.log("btn3 case working");
            // for (i = 0; i < choiceEl.length; i++){
            //     console.log("buttons disabled");
            //     choiceEl[i].disabled = true; //disable buttons
            // }
            if(compAnswer == userAnswer){
                correctAns();
                if (questionIndex < questionSet.length){
                    showAnsandButton();
                }
            }
            else{
                incorrectAns();
                if (questionIndex < questionSet.length){
                    showAnsandButton();
                }
            }
            console.log(compAnswer,userAnswer);
        }
        
        else if(event.target.matches("#btn4")){
            compAnswer = questionSet[questionIndex][5];
            userAnswer = btn4El.textContent[0];
            console.log("btn4 case working");
            // for (i = 0; i < choiceEl.length; i++){
            //     console.log("buttons disabled");
            //     choiceEl[i].disabled = true; //disable buttons
                // }
            if(compAnswer == userAnswer){
                correctAns();
                if (questionIndex < questionSet.length){
                    showAnsandButton();
                }
               
            }
            else{
                incorrectAns();
                if (questionIndex < questionSet.length){
                    showAnsandButton();
                }
            }
            console.log(compAnswer,userAnswer);
        }

        else if(event.target.matches("#btn5") && questionIndex < questionSet.length){
            console.log("btn5 case working");
            hideAnsandButton();
            displayQuestion();
        }
        if(questionIndex == questionSet.length){
            quizQuit();
        }

        else if(event.target.matches("#submit")){

        }
});

function correctAns(){
    correct++;
    console.log(correct,incorrect);
        if (questionIndex < questionSet.length){
            questionIndex++;
        }
}

function incorrectAns(){
    incorrect++;
    console.log(correct,incorrect);
        if (questionIndex < questionSet.length){
            questionIndex++;
        }
    }
function showQuiz(){
        wrapper2El.setAttribute("style", "visibility: visible");
        for (i = 0; i < choiceEl.length; i++){
        choiceEl[i].setAttribute("style", "visibility: visible");
    }
    questionEl.setAttribute("style","visibility: visible");
}

function showAnsandButton(){
    for (i = 0; i < revealAnswer.length; i++){
        revealAnswer[i].setAttribute("style", "visibility: visible");
    }
    answerEl.setAttribute("style", "visibility: visible");
    btn5El.setAttribute("style", "visibility: visible");
    answerEl.textContent = "Correct answer: " + questionSet[questionIndex][5] + "\nCorrect: " + correct + " / 9";
}

function quizQuit(){
        wrapper2El.setAttribute("style","display: none");
    for (i = 0; i < revealAnswer.length; i++){
        revealAnswer[i].setAttribute("style", "display: none");
    }
    for (i = 0; i < choiceEl.length; i++){
        choiceEl[i].setAttribute("style", "display: none");
    }
    answerEl.setAttribute("style", "display: none");
    btn5El.setAttribute("style", "display: none");
    questionEl.setAttribute("style", "display: none");
    for (i = 0; i < endGameEl.length; i++){
        endGameEl[i].setAttribute("style", "visibility: visible");
    }
}

function hideAnsandButton() {
console.log("Next Question");

    for (i = 0; i < revealAnswer.length; i++){
        revealAnswer[i].setAttribute("style", "visibility: hidden");
    }
    answerEl.setAttribute("style", "visibility: hidden");
    btn5El.setAttribute("style", "visibility: hidden");
    
    console.log("next question finished");
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
    for (i = 0; i < choiceEl.length; i++){
        console.log("buttons enabled");
        choiceEl[i].enabled = true; //enable buttons
    }
}

var counter = document.querySelector("#counter");
var addButton = document.querySelector("#add");
var subtractButton = document.querySelector("#subtract");

var count = localStorage.getItem("count");

counter.textContent = count;

addButton.addEventListener("click", function() {
  count++;
  counter.textContent = count;

  localStorage.setItem("count", count);
});

subtractButton.addEventListener("click", function() {
  count--;
  counter.textContent = count;

  localStorage.setItem("Initials", count);
});

// function logData(){
//     localStorage.setItem("count", "string");
//     alert(localStorage.getItem("count"));    
// }
    
// function setTime() {
//     var timerInterval = startTimer(function() {
//         secondsLeft--;
//         timerEl.textContent = secondsLeft + " seconds";

//         if(secondsLeft === 0) {
            
//         }

//     }, 6000);
// }

