const POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obesquious", "dissonant", "toady", "idempotent"];

var word = "";
var guesses = "";
var guessCount;
const MAX_GUESSES = 6;

let isWordComplete = function(){
    for (let i = 0; i < word.length; i++) {
        if (guesses.indexOf(word.charAt(i)) < 0) {
            return false;
        }
    }
    return true;
}

let newGame = function(){
    guessCount = MAX_GUESSES;
    let randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    guesses="";
    updatePage();
}

let updatePage = function(){
    let clueString = "";
    for(let i=0;i< word.length;i++)
    {
        var currentLetter = word.charAt(i);
        if(guesses.indexOf(currentLetter) >=0){
            clueString+=currentLetter+" ";
        }
        else{
            clueString += "_ ";
        }
    }


    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guesses: "+guesses;

    let image = document.getElementById("hangmanpic");
    image.src = `images/hangman${guessCount}.gif`;

    if(guessCount===0){
        guessArea.textContent = "Sorry, You Failed! Try Again!";
    }
    else if (isWordComplete()){
        guessArea.textContent = "You Won!"
    }
}

let guessLetter = function(){
    let input = document.getElementById("guess");
    let letter = input.value;
    letter = letter.toLowerCase();
    
    if (word !== "" && guessCount > 0 && !isWordComplete()){
    if (guesses.indexOf(letter) < 0) {
      
        if(word.indexOf(letter) < 0) {
            guessCount--;
        }
        guesses+=letter;
    }
    
    updatePage();
}

    input.value = "";
}
