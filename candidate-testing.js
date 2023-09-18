const input = require('readline-sync');

//TODO: Variables for Part 2
let questions = [];
let correctAnswers = [];
let candidateAnswers = [];
let answersCount = 0;
let candidateName = ``;
let i1 = 0;




// TODO 2: modify your quiz app to ask 5 questions //

//Questions array
questions = [`Who was the first American woman in space? `, `True or false: 5 kilometer == 5000 meters? `,
`(5 + 3)/2 * 10 = ? `,`Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? `,
`What is the minimum crew size for the ISS? `];

//Answers array
correctAnswers = [`Sally Ride`, `true`, `40`, `Trajectory`, `3`];


// TODO 1.1a: Define candidateName // 




// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = `Who was the first American woman in space? `;
let correctAnswer = `Sally Ride`;
let candidateAnswer = ``;

//runProgram();


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

  /*candidateName = input.question(`What is your name?`);
  console.log(canpndidateName); This is code that does not work due to prompt/readline being noncompliant
  I have replaced it with a placeholder and left it commented out*/

  candidateName = `Joseph`
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  while(i1 < 5){
    candidateAnswer = input.question(questions[i1]);
    correctAnswer = correctAnswers[i1];
    //gradeQuiz(candidateAnswer);
    if(candidateAnswer === correctAnswers[i1]){
      console.log(`\nThat's correct, good job!`);
      console.log(`\nCorrect answer: ${correctAnswer}\nYour answer: ${candidateAnswer}`);
      candidateAnswers[i1] = candidateAnswer;

    }
    else if(candidateAnswer !== correctAnswers[i1]){
      console.log(`\nSorry, but that's incorrect.`);
      console.log(`\nCorrect answer: ${correctAnswer}\nYour answer: ${candidateAnswer}`);
      candidateAnswers[i1] = candidateAnswer;

    }
    i1++;
  }
  gradeQuiz(candidateAnswers);
}

/*function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  let i1 = 0;
  while(i1 < 5){
    candidateAnswer = input.question(questions[i1]);
    gradeQuiz(candidateAnswer);
    if(candidateAnswer === candidateAnswers[i1]){
        answersCount++;
    }
    i1++;
  }
}*/


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  
  /*if(candidateAnswer === correctAnswer){
    console.log(`\nThat's correct, good job!`);
  }
  else{
    console.log(`\nSorry, but that's incorrect.`);
  }*/

  //console.log(`\nCorrect answer: ${correctAnswer}\nYour answer: ${candidateAnswer}`)

  //Commented out due to not working

  //---------------------------------------------------------------------------

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.

  answersCount = 0;

  let i2 = 0;
  while(i2 < 5){
    if(candidateAnswers[i2] === correctAnswers[i2]){
      answersCount++
    }

  grade = (answersCount/5) *100;

  console.log(grade);
  
  return grade;
  }
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello ${candidateName}, it's time for your certification exam.`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};