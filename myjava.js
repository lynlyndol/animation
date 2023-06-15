// Generate random number between 1 and 150
let randomNumber = Math.floor(Math.random() * 150) + 1;

// Set number of attempts
const maxAttempts = 3;

// Start game
let guess;
let attempts = 0;
let gameOver = false;

while (!gameOver && attempts < maxAttempts) {
  // Get guess from player
  guess = parseInt(prompt(`Guess a number between 1 and 150. You have ${maxAttempts - attempts} attempts remaining.`));

  // Check if guess is correct
  if (guess === randomNumber) {
    alert(`Congratulations! You guessed the number ${randomNumber} correctly.`);
    gameOver = true;
  } else {
    // Give hint to player
    if (guess > randomNumber) {
      alert('Your guess is too high. Guess lower.');
    } else {
      alert('Your guess is too low. Guess higher.');
    }
    attempts++;
  }
}

// If player used all attempts and still did not guess correctly, game over
if (!gameOver) {
  alert(`Game over. The number was ${randomNumber}.`);
}
