// --- Varibles ---

var wordBank = ["airplane", "adventure", "backpack", "beach", "camera", "cocktail", "itinerary", "jetlag", "landmark", "luggage",  
                "memories", "mountains", "passport", "relax", "resort", "roadtrip", "tourist", "train", "vacation", "wanderlust"];
var wordSelected = "";
var wordSelectedLetters = [];
var wordSelectedBlank = [];
var wordUpdated = [];

var userGuess = "";
var numberGuesses = 10;
var lettersGuessed = [];
var wins = 0;
var losses = 0;

// var letters = [
//     "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
//     "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
// ];


// ---Function ---

//to SELECT random word from wordBank
function selectWord () {
    wordSelected = wordBank[Math.floor(Math.random() * wordBank.length)]
        console.log(wordSelected);
}

//to CHANGE select word to blank letters
function wordToBlank () {
    selectWord ();
    wordSelectedLetters = wordSelected.split("");
        console.log(wordSelectedLetters);

    for (var i=0; i <wordSelectedLetters.length; i++) {
        wordSelectedBlank.push("_");
    }
        console.log(wordSelectedBlank);
}

// check IF user guess is correct
function checkUserGuess () {
    for (var i=0; i<wordSelectedLetters.length; i++) {
        if (userGuess === wordSelectedLetters[i]) {
            console.log("correct");
            wordSelectedBlank[i] = userGuess;
        } 
    }
    console.log(wordSelectedBlank);
}


// ---Main Process ---

//CALL function to show random selected word as blank
wordToBlank();

// user guesses by pressing KEY 
document.onkeyup = function (event) {
    userGuess = event.key;
        console.log(userGuess)
    checkUserGuess();
}

// Access HTML
document.getElementById("word-text").textContent = wordSelectedBlank;
//document.getElementById("wins-text").textContent - wins;
//document.getElementById("number-text").textContent = numberGuesses;
//document.getElementById("letters-text").textContent = lettersGuessed;

