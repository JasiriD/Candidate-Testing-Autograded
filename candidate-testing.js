const input = require('readline-sync');

//TODO: Variables for Part 2
let questions = [];
let correctAnswers = [];
let candidateAnswers = [];
let candidateName = ``;
let i1 = 0;
let finalscore = 0;




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

  candidateName = input.question(`What is your name? `);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for(let i = 0; i < 5; i++){
    candidateAnswer = input.question(questions[i]);
    correctAnswer = correctAnswers[i];
    if(candidateAnswer.toLowerCase() === correctAnswers[i].toLowerCase()){
      console.log(`\nTnohat's correct, good job!`);
      console.log(`\nCorrect answer: ${correctAnswer}, Your answer: ${candidateAnswer}`);
      candidateAnswers[i] = candidateAnswer;

    }
    else if(candidateAnswer.toLowerCase() !== correctAnswers[i].toLowerCase()){
      console.log(`\nSorry, but that's incorrect.`);
      console.log(`\nCorrect answer: ${correctAnswer}, Your answer: ${candidateAnswer}`);
      candidateAnswers[i] = candidateAnswer;

    }
  }
  let finalscore = gradeQuiz(candidateAnswers);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  let grade;  //TODO 3.2 use this variable to calculate the candidates score.

  let answersCount = 0;

  for(let i = 0; i < correctAnswers.length; i++){
    if(candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
      answersCount++
    };
  };

  grade = (answersCount/correctAnswers.length) * 100;

  //console.log(grade);

  console.log(
    `Your score: ${grade}\n
    Required score: 80\n`
    );

    if(grade >= 80){
      console.log(`Congradutaltions, you passed!`);
    }
    else{
      console.log(`Sorry, but you did not pass.`);
    }

  
  return grade;
};

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello ${candidateName}, it's time for your certification exam.`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
};

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