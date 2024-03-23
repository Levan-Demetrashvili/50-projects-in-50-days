'use strict';
const formEl = document.querySelector('form');
const questionNanswer = document.querySelector('.question-container');
const submitBtn = document.getElementById('submit');

let score = 0;
let index = 0;
const quizData = [
  {
    question: 'Which language runs in a web browser?',
    first: 'Java',
    second: 'C',
    third: 'Python',
    fourth: 'JavaScript',
    correct: 'fourth',
  },
  {
    question: 'What does CSS stand for?',
    first: 'Central Style Sheets',
    second: 'Cascading Style Sheets',
    third: 'Cascading Simple Sheets',
    fourth: 'Cars SUVs Sailboats',
    correct: 'second',
  },
  {
    question: 'What does HTML stand for?',
    first: 'Hypertext Markup Language',
    second: 'Hypertext Markdown Language',
    third: 'Hyperloop Machine Language',
    fourth: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'first',
  },
  {
    question: 'What year was JavaScript launched?',
    first: '1996',
    second: '1995',
    third: '1994',
    fourth: 'none of the above',
    correct: 'second',
  },
];

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();

  const answerinputs = [...document.querySelectorAll('input[name=answer]')];
  if (!answerinputs.some(input => input.checked)) return;

  // Detect if answer is correct
  const selectedAnswer = answerinputs.find(input => input.checked);
  if (selectedAnswer.id === quizData[index].correct) score++;

  // Move on next question
  index++;
  if (index !== quizData.length) {
    const { question, first: a1, second: a2, third: a3, fourth: a4 } = quizData[index];
    questionNanswer.innerHTML = `
    <h1 id="question">${question}</h1>
    
    <div class="answers">
    <label class="answer-1" for="first"> <input type="radio"  id="first" name="answer" /> ${a1} </label>
    
    <label class="answer-2" for="second"> <input type="radio"  id="second" name="answer" /> ${a2} </label>
    
    <label class="answer-3" for="third"> <input type="radio"  id="third" name="answer" /> ${a3} </label>
    
    <label class="answer-4" for="fourth"> <input type="radio"  id="fourth" name="answer" /> ${a4} </label>
    </div>
    `;
  } else {
    formEl.innerHTML = `
    <h1> You answered ${score}/${quizData.length} questions correctly </h1>
    <button id="reload">Reload</button>
    `;
  }
});
