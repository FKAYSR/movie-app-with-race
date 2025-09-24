"use strict"; // Enable strict mode for better error checking

// #0: Listen for page load
window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// #1: Initialize the app
function initApp() {
  console.log("initApp: Movie App is running 🎉"); // Log to the console that the app is running
}

// My first variable
const movieTitle = "The Matrix";
console.log("Movie:", movieTitle);

// Different data types (following your project structure)
const movieYear = 1999; // Number (tal) - no quotes needed
const isGoodMovie = true; // Boolean (true/false)

console.log("Year:", movieYear);
console.log("Is it a good movie?", isGoodMovie);

// Try to change movieTitle (this will give an error!)
// movieTitle = "Inception"; // ← Kommenteret ud så den ikke kører

// let = can be changed later
let userRating = 4.5;
console.log("Start rating:", userRating);

// Change the value (this works!)
userRating = 5.0;
console.log("New rating:", userRating);

// Old way (works, but messy)
const oldMessage = "The movie " + movieTitle + " is from " + movieYear;
console.log("Old way:", oldMessage);

// Smart way with template literals
const smartMessage = `The movie ${movieTitle} is from ${movieYear}`;
console.log("Smart way:", smartMessage);

// Multiple variables in same template literal
const complexMessage = `Movie: ${movieTitle}, Year: ${movieYear}, Rating: ${userRating}, Good? ${isGoodMovie}`;
console.log("Complete info:", complexMessage);

// Multiple lines in same message (like your project's movie details)
const multiLineMessage = `🎬 MOVIE INFO:
Title: ${movieTitle}
Year: ${movieYear}
Rating: ${userRating}/10
Recommended: ${isGoodMovie}`;
console.log(multiLineMessage);

