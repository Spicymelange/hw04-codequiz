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
var compAnswer;
var questionIndex = 0;
var correct = 0;
var incorrect = 0;
var questionSet = [['Question 1. \nPredict the output of the following JavaScript code.\n\nvar a = "JavaScript";\nvar result = a.substring(4,5);\ndocument.write(result);','A. Sc','B. pt','C. S','D. a','C'],
['Question 2. \nPredict the output of the following JavaScript code.\n\na = 8 + "8";\ndocument.write(a);','A. 16','B. 88','C. Compilation Error','D. Run Time Error','B','Next Question'],
['Question 3. \nWhich of the following is nt a reserved word in JavaScript?\n\n','A. program','B. interface','C. throws','D. short','A'],
[]];
console.log(revealAnswer);
//Display the question, buttons text and answer.
startEl.addEventListener("click", function (event){
    displayQuestion();
    startEl.setAttribute("style","display: none");
    titleEl.setAttribute("style","display: none");
    wrapper2El.setAttribute("style","display: grid");
    for (i = 0; i < choiceEl.length; i++){
        choiceEl[i].setAttribute("style", "display: grid");
    }
    for (i = 0; i < revealAnswer.length; i++){
        revealAnswer[i].setAttribute("style", "display: grid");
    }
        questionEl.setAttribute("style","display: grid");
});
//monitor choices class
for (i = 0; i < choiceEl.length; i ++){
    choiceEl[i].addEventListener("click", function (event){
        for (i = 0; i < choiceEl.length; i++){
            choiceEl[i].disabled = true; //disable buttons
        }
        revealAnswer.setAttribute("style", "display: grid");
        answerEl.setAttribute("style", "display: grid");
        btn5El.setAttribute("style", "display: grid");
        compAnswer = questionSet[questionIndex][5];
        userAnswer = event.target.textContent;
        console.log(compAnswer,userAnswer);
        if(compAnswer === userAnswer[0]){
            correct++;
            revealAnswer.setAttribute("style", "display: grid");
            questionIndex++;
            nextQuestion();
        }
        else{
            incorrect++;
            revealAnswer.setAttribute("style", "display: grid");
            questionIndex++;
            nextQuestion();
        }
    });
}   

function nextQuestion() {
    btn5El.addEventListener("click", function(event){
        displayQuestion();
        for (i = 0; i < revealAnswer.length; i++){
            revealAnswer[i].setAttribute("style", "display: hidden");
        }
    });
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
    answerEl.textContent = "Correct answer: " + questionSet[questionIndex][5] + "\nCorrect: " + (correct + 1) + "/" + (questionIndex + 1);

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