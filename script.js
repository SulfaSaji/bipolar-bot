// A list of compliments to choose from
const compliments = [
    "You are a coding superstar!",
    "That's a fantastic idea!",
    "Your code is beautiful!",
    "You're doing amazing!",
    "You have a great imagination!",
    "Your work is impressive!",
    "You make a difference!",
    "You are a quick learner!",
    "Keep up the great work!",
    "You are a valuable teammate!"
];

// Get the input box and the display div elements
const complimentInput = document.getElementById('compliment-input');
const complimentDisplay = document.getElementById('compliment-display');

// Add a keydown event listener to the input box
complimentInput.addEventListener('keydown', () => {
    // Get a random compliment from the array
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const randomCompliment = compliments[randomIndex];

    // Update the text content of the display div
    complimentDisplay.textContent = randomCompliment;
});
