const POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obesquious", "dissonant", "toady", "idempotent"];

var word = "";
var guesses = "";

let newGame = function(){
    let randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
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
}

let guessLetter = function(){
    let input = document.getElementById("guess");
    let letter = input.value;
    guesses+=letter;
    updatePage();

}
