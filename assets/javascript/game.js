// WORD BANK
var word_bank = [ "kirk","starship","vulcan"]
var random_word ="";
var word_letters= [];
var letters = 0;
var blanksAndCorrect = [];
var wrongGuess = [];


var win= 0;
var loss= 0;
var guesses=10;
var game_message = [ "Winner!","You Lose!"];

function reset() {
    guesses = 10;
    wrongGuess = [];
    blanksAndCorrect = [];
    game()
}


function game(){
    random_word = word_bank[Math.floor(Math.random() * word_bank.length)];
    word_letters = random_word.split("");
    letters = word_letters.length;
    for (var i = 0; i < word_letters.length; i++) {
        blanksAndCorrect.push("_");
        }

    document.getElementById("currentword").html = "  " + blanksAndCorrect.join("  ");
    console.log(random_word);
    console.log(word_letters)
    console.log(letters)
    console.log(blanksAndCorrect)
}



function checkGuess(guessed_letter) {
    var guess = false
    for(var i = 0; i < word_letters.length; i++){
        if (guessed_letter == random_word[i]) {
            blanksAndCorrect[i] = guessed_letter;
            guess = true;
        }
        else{
            wrongGuess.push(letter);
            guesses--;        
        }    
    }
    console.log(blanksAndCorrect);
}

game()

document.onkeyup = function(event) {
    // Captures guessed letter of key pressed
        var guessed_letter = event.key.toLowerCase();
        console.log(guessed_letter);
        checkGuess(guessed_letter);
        document.getElementById("playerguesses").html = "  " + wrongGuess.join(" ");
    }
    