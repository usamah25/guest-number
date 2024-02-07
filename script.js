'use strict';

/* 
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23; 
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);


    console.log(typeof guess);

    // When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No Number'

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        
        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        // when guess is wrong
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = '📈 Too High';
            score--;
            document.querySelector('.score').textContent = score
        } 
        else {
            document.querySelector('.message').textContent = '💥 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = '📉 Too Low';
        score--;
        document.querySelector('.score').textContent = score;
    }
})

document.querySelector('.again').addEventListener('click', function () {
    const again = document.querySelector('.again').value;
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = "?";
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = ''; 
})