'use strict';
let highscore = 0;
let score = 20;
let selectscore = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = selectscore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Value choosen';
  } else if (guess === selectscore) {
    document.querySelector('.message').textContent = 'Correct Value';
    document.querySelector('.number').textContent = selectscore;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > selectscore) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Value too High';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < selectscore) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Value too Low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  selectscore = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
