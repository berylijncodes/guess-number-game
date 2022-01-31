let messages = document.querySelector('.score__info-message');
let message = document.querySelector('.score__info');
const scoreInfo = document.querySelector('.score__info-score');
const headerNumber = document.querySelector('.header__number');
const again = document.querySelector('.again');
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let currentScore = 20;
let highScore = 0;
let confettiElements = document.getElementById('my-canvas');

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.score__number-guess').value);

  //   When a player does not guess a number
  if (!guess) {
    messages.innerHTML =
      '<p> <i class="fas fa-exclamation-circle"></i> Choose a number!</p>';
    //   When a player guesses a correct number
  } else if (guess === randomNumber) {
    messages.innerHTML =
      '<p> <i class="fas fa-check-circle"></i> Correct Number!</p>';
    headerNumber.textContent = randomNumber;
    scoreInfo.innerHTML = `<p>
        <i class="fas fa-check-circle"></i> Your Score: ${currentScore}
      </p>`;
    document.querySelector('.score__info-highscore').innerHTML = `<p>
         <i class="fas fa-trophy"></i> Highscore: ${currentScore}
      </p>`;
    if (currentScore > highScore) {
      highScore = currentScore;
      document.querySelector('.score__info-highscore').innerHTML = `<p>
        <i class="fas fa-trophy"></i> Highscore: ${highScore}
      </p>`;
    }
    confettiElements.classList.add('active');

    //   When a player guess a number higher than the random number
  } else if (guess > randomNumber) {
    if (currentScore > 1) {
      messages.innerHTML =
        '<p> <i class="fas fa-arrow-circle-up"></i> Too high!</p>';
      currentScore--;
      scoreInfo.innerHTML = `<p>
          <i class="fas fa-check-circle"></i> Your score: ${currentScore}
        </p>`;
    } else {
      messages.innerHTML =
        '<p> <i class="fas fa-arrow-circle-up"></i> Game Over!</p>';
      scoreInfo.innerHTML = `<p>
          <i class="fas fa-check-circle"></i> Your score: ${currentScore}
        </p>`;
    }
    // When a player guesses a number lower than the random number
  } else if (guess < randomNumber) {
    if (currentScore > 1) {
      messages.innerHTML = '<p> <i class="fas fa-frown"></i> Too low!</p>';
      currentScore--;
      scoreInfo.innerHTML = `<p>
          <i class="fas fa-check-circle"></i> Your score: ${currentScore}
        </p>`;
    } else {
      messages.innerHTML = '<p> <i class="fas fa-frown"></i> Game Over!</p>';
      scoreInfo.innerHTML = `<p>
          <i class="fas fa-check-circle"></i> Your score: 0
        </p>`;
    }
  }
});

// Reset Function
again.addEventListener('click', function () {
  currentScore = 20;
  messages.textContent = 'Start Guessing...';

  document.querySelector('.score__number-guess').value = '';

  scoreInfo.innerHTML = `<p>
          <i class="fas fa-check-circle"></i> Your score: ${currentScore}
        </p>`;
  randomNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score__info-highscore').innerHTML = `<p>
        <i class="fas fa-trophy"></i> Highscore: ${highScore}
      </p>`;
  headerNumber.textContent = '?';
  confettiElements.classList.remove('active');
});
