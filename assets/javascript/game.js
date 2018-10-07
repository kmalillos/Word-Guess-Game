// --- Varibles ---

var wordBank = ["airplane", "adventure", "backpack", "beach", "camera", "jetlag", "landmark", "luggage", "memories", 
                "mountains", "passport", "relax", "resort", "roadtrip", "tourist", "train", "travel", "vacation"];
var wordSelected = "";
var wordSelectedLetters = [];
var wordUpdated = [];
var wins = 0;
var losses = 0;
var numberGuesses = 0;
var lettersGuessed = [];

// ---Function ---

//SELECT random word from wordBank
function selectWord () {
    wordSelected = wordBank[Math.floor(Math.random() * wordBank.length)]
        console.log(wordSelected);
}

//UPDATE select word to blank letters
function wordToBlank () {
    selectWord ();
    wordSelectedLetters = wordSelected.split("");
        console.log(wordSelectedLetters);

    for (var i=0; i <wordSelectedLetters.length; i++) {
        wordUpdated.push("_");
    }
        console.log(wordUpdated);
}

// ---Main Process ---

wordToBlank();