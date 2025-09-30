"use strict"; // Enable strict mode for better error checking

// #0: Listen for page load
window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// #1: Initialize the app
function initApp() {
  console.log("initApp: Movie App is running 🎉"); // Log to the console that the app is running
}

// My first variable
const movieTitle = "Prison Break";
console.log("Movie:", movieTitle);

// Different data types (following your project structure)
const movieYear = 2025; // Number (tal) - no quotes needed
const isGoodMovie = true; // Boolean (true/false)
const movieGenre = "Action"; // Another string

console.log("Year:", movieYear);
console.log("Is it a good movie?", isGoodMovie);
console.log("Genre:", movieGenre);

// Try to change movieTitle (this will give an error!)
// movieTitle = "Inception"; // ← Kommenteret ud så den ikke kører

// let = can be changed later
let userRating = 4.5;
console.log("Start rating:", userRating);

// Change the value (this works!)
userRating = 9.5;
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
Recommended: ${isGoodMovie};
Genre: ${movieGenre}`;
console.log(multiLineMessage);

// Only strings (text) Also called Array
const movieTitles = ["The Matrix", "Inception", "Interstellar"];

// Only numbers
const movieYears = [1999, 2010, 2014];

// Movie ratings (numbers)
const movieRatings = [8.7, 8.8, 8.6];

// Blandet indhold (fungerer også!)
const randomArray = ["The Matrix", 1999, 8.7];

console.log("Movie titles:", movieTitles);
console.log("Movie years:", movieYears);
console.log("Movie ratings:", movieRatings);
console.log("Mixed array:", randomArray);

// Hent enkelt film (VIGTIGT: arrays starter fra 0!)
console.log("Første film (index 0):", movieTitles[0]);
console.log("Anden film (index 1):", movieTitles[1]);
console.log("Tredje film (index 2):", movieTitles[2]);

// Find længden af listen
console.log("Antal film i listen:", movieTitles.length);
console.log("Sidste film (smart måde):", movieTitles[movieTitles.length - 1]);

// Tilføj film til slutningen
movieTitles.push("The Dark Knight");
console.log("Efter tilføjelse:", movieTitles);
console.log("Nu har vi", movieTitles.length, "film!");

// Tilføj flere på én gang
movieTitles.push("Pulp Fiction", "Goodfellas");
console.log("Efter flere tilføjelser:", movieTitles);

// Fjern den sidste film
const removedMovie = movieTitles.pop();
console.log("Removed movie:", removedMovie);
console.log("List now:", movieTitles);

// Fjern den første film
const firstRemoved = movieTitles.shift();
console.log("First removed:", firstRemoved);
console.log("List now:", movieTitles);

// An object collects ALL data about one movie! 🎉
const movie = {
  title: "The Matrix",
  year: 1999,
  rating: 8.7
};

console.log("Complete movie object:", movie);

// Get specific properties with dot notation
console.log("Movie title:", movie.title);
console.log("Release year:", movie.year);
console.log("Rating:", movie.rating);

// Real movie object structure (exactly like your movies.json!)
const realMovie = {
  id: 2,
  title: "The Matrix",
  year: 1999,
  genre: ["Action", "Sci-Fi"],
  director: "Lana Wachowski, Lilly Wachowski",
  rating: 8.7,
  actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
};

console.log("Movie ID:", realMovie.id);
console.log("Title:", realMovie.title);
console.log("Year:", realMovie.year)
console.log("First genre:", realMovie.genre[0]);
console.log("Directors:", realMovie.director);
console.log("First actor:", realMovie.actors[0]);

// Vi kan tilføje nyt data til eksisterende objekter
realMovie.watched = false;
realMovie.review = "Fantastisk film!";

console.log("Er filmen set?", realMovie.watched);
console.log("Anmeldelse:", realMovie.review);

// Vi kan også ændre data der allerede findes
console.log("Gammel rating:", realMovie.rating);

realMovie.rating = 9.0; // Opgraderet!
realMovie.watched = true; // Nu har vi set den!

console.log("Ny rating:", realMovie.rating);
console.log("Nu er den set:", realMovie.watched);

// Lav en flot beskrivelse med objektdata
const movieDescription = `
🎬 ${realMovie.title} (${realMovie.year})
⭐ Rating: ${realMovie.rating}/10  
🎭 First genre: ${realMovie.genre[0]}
� Director: ${realMovie.director}
👥 First actor: ${realMovie.actors[0]}
📝 ${realMovie.review}
`;

console.log("Movie info:");
console.log(movieDescription);

// This works fine for one movie...
const singleMovie = {
  title: "The Matrix",
  year: 1999,
  rating: 8.7
};

// Array of movie objects - exactly like allMovies in your project! 🎉
// Udvid databasen med mere komplekse objekter
const allMovies = [
  {
    id: 1,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: ["Action", "Sci-Fi"],
    director: "Lana Wachowski, Lilly Wachowski"
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: ["Action", "Thriller", "Sci-Fi"],
    director: "Christopher Nolan"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan"
  }
];

console.log("All movies:", allMovies);
console.log("Complete movie database:", allMovies);
console.log("Number of movies:", allMovies.length);

// Hent den første film (index 0)
const firstMovie = allMovies[0];
console.log("Første film objekt:", firstMovie);
console.log("First movie title:", firstMovie.title);

// Eller gør det direkte i ét trin
console.log("Second movie year:", allMovies[1].year);
console.log("Second movie rating:", allMovies[1].rating);

// Hent komplekse data
console.log("Matrix first genre:", allMovies[0].genre[0]);
console.log("Inception director:", allMovies[1].director);
console.log("Dark Knight number of genres:", allMovies[2].genre.length);

// Hent alle genrer for første film
const matrixGenres = allMovies[0].genre;
console.log("Matrix alle genrer:", matrixGenres.join(", "));

// Loop through all movies
for (const movie of allMovies) {
  console.log(`🎬 ${movie.title} (${movie.year})`);
  console.log(`⭐ Rating: ${movie.rating}`);
  console.log(`🎭 Genre: ${movie.genre[0]}`);
  console.log("---");
}

// Gentaget kode - ikke så smart... 😕
console.log("Hej Emma! Velkommen til filmappen! 🎬");
console.log("Hej Lucas! Velkommen til filmappen! 🎬");
console.log("Hej Sofie! Velkommen til filmappen! 🎬");
console.log("Hej Thomas! Velkommen til filmappen! 🎬");
// Hvad hvis vi skal hilse på 100 personer?

// En funktion - genbrugelig kode! 🎉
function sayHello() {
  console.log("Hej! Velkommen til filmappen! 🎬");
}

// Nu kan vi bruge den mange gange
sayHello();
sayHello();
sayHello();

// Funktion med parameter - input til funktionen!
function sayHelloTo(name) {
  console.log(`Hej ${name}! Velkommen til filmappen! 🎬`);
}

// Nu kan vi give forskellige navne
sayHelloTo("Kejser");
sayHelloTo("Viggo");
sayHelloTo("Bakugo");

// Funktion med flere parametre
function sayHelloToUser(name, age) {
  console.log(`Hej ${name}! Du er ${age} år og velkommen til filmappen! 🎬`);
}

// Giv flere inputs til funktionen
sayHelloToUser("Kejser", 22);
sayHelloToUser("Viggo", 25);
sayHelloToUser("Bakugo", 32);

// Funktion der beregner og returnerer en værdi
function calculateMovieAge(releaseYear) {
  const currentYear = 2025;
  const age = currentYear - releaseYear;
  return age; // Send resultatet tilbage!
}

// Gem resultatet i en variabel
const matrixAge = calculateMovieAge(1999);
console.log("The Matrix er", matrixAge, "år gammel");

// Eller brug det direkte
console.log("Inception er", calculateMovieAge(2010), "år gammel");

// Gentaget kode for at beskrive film...
const movie1 = { title: "The Matrix", year: 1999, rating: 8.7 };
const movie2 = { title: "Inception", year: 2010, rating: 8.8 };

console.log(`🎬 ${movie1.title} (${movie1.year}) - Rating: ⭐ ${movie1.rating}`);
console.log(`🎬 ${movie2.title} (${movie2.year}) - Rating: ⭐ ${movie2.rating}`);
// Meget gentaget kode igen! 😕

// Function that takes a movie object as parameter (displayMovie function)
function displayMovieInfo(movie) {
  const movieInfo = `🎬 ${movie.title} (${movie.year}) - Rating: ⭐ ${movie.rating}`;
  return movieInfo;
}

// Now we can reuse this for any movie!
const testMovie = {
  id: 1,
  title: "Kpop Demon Hunters",
  year: 2025,
  rating: 9,
  genre: ["K-drama", "Action"]
};

console.log(displayMovieInfo(testMovie));

// Funktion der henter film titel
function getMovieTitle(movieObject) {
  return movieObject.title;
}

// Funktion der henter film år
function getMovieYear(movieObject) {
  return movieObject.year;
}

// Funktion der beregner film alder
function getMovieAge(movieObject) {
  const currentYear = 2025;
  return currentYear - movieObject.year;
}

// Test funktionerne
console.log("Film titel:", getMovieTitle(testMovie));
console.log("Film år:", getMovieYear(testMovie));
console.log("Film alder:", getMovieAge(testMovie), "år");

// Create a test database (match your project structure)
const allMovies2 = [
  { title: "The Matrix", year: 1999, rating: 8.7, genre: ["Action", "Sci-Fi"] },
  { title: "Inception", year: 2010, rating: 8.8, genre: ["Action", "Thriller"] },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: ["Action", "Crime"] },
  { title: "Pulp Fiction", year: 1994, rating: 8.9, genre: ["Crime", "Drama"] }
];

// Function that displays all movies nicely
function displayAllMovies(movieArray) {
  console.log("\n=== ALLE FILM ===");
  for (const movie of movieArray) {
    console.log(displayMovieInfo(movie)); // Genbruger vores funktion!
  }
}

// Test funktionen med vores film database
displayAllMovies(allMovies);





