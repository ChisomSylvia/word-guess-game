const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const result = document.getElementById('result');
const hint = document.getElementById('hint');
const guesses = document.getElementById('guesses');


// array of favorite fruits
const favFruits = ['Mango', 'Cherry', 'Dates', 'Guava', 'Apricot', 'Soursop', 'Pear', 'Beetroot', 'Figs', 'Kiwi'];

// metthod to select a random word from the array
let fruit = favFruits[Math.floor(Math.random() * favFruits.length)];

// button event, click
guessBtn.addEventListener('click', checkGuess);


// function to check if guess is correct
let guessCount = 1;
function checkGuess() {
  let userGuess = guessInput.value;
  document.getElementById('resultDiv').classList.remove('hidden');

  if (guessCount === 1) {
    hint.textContent = `The fruit starts with: ${fruit[0]}`;
    guesses.textContent = 'Previous Guesses: ';
  }

  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === fruit) {
    result.textContent = 'Congrats! You guessed my fav fruit';
    result.style.color = 'green';
    hint.textContent = '';
    guesses.textContent = '';
    endGame();
  } else if (guessCount === 5) {
    result.textContent = 'GAME OVER!';
    hint.textContent = '';
    guesses.textContent = '';
    endGame();
  } else {
    result.textContent = 'Wrong! Try Again';
    result.style.color = 'red';
    hint.textContent = `The fruit starts with: ${fruit[0]}`;
  }

  guessCount++;
  guessInput.value = '';
  guessInput.focus();
}


// function to end game
let resetBtn
function endGame() {
  guessInput.disabled = true;
  guessBtn.disabled = true;

  resetBtn = document.createElement('button');
  resetBtn.textContent = 'Restart Game';
  resetBtn.style.padding = '10px 20px';
  resetBtn.style.borderRadius = '20px';
  resetBtn.style.backgroundColor = 'rgb(165, 42, 42)';
  resetBtn.style.color = 'white';
  resetBtn.style.cursor = 'pointer';
  const resultDiv = document.getElementById('resultDiv');
  resultDiv.append(resetBtn);

  resetBtn.addEventListener('click', resetGame);
}


// function to reset game and start over
function resetGame() {
  guessCount = 1;

  const resultDivs = document.querySelectorAll('#resultDiv p');
  for (const resultDiv of resultDivs) {
    resultDiv.textContent = '';
  }

  resetBtn.parentNode.removeChild(resetBtn);

  guessInput.disabled = false;
  guessBtn.disabled = false;
  guessInput.value = '';
  guessInput.focus();


  fruit = favFruits[Math.floor(Math.random() * favFruits.length)];
}
