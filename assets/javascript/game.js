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

    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");
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
            wrongGuess.push(guessed_letter);        
        }    
    }
    if(guess != true){
        guesses--;
    }
    console.log(blanksAndCorrect);
}


function update_index() {
    console.log("wins:" + win + "| losses:" + loss + "| guesses left:" + guesses)

    //if WON...then alert, play audio, display image and reset new round
    if (word_letters.toString() == blanksAndCorrect.toString()) {
        win++;
        aud()
        reset()
        //display wins on screen
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guesses === 0) {
        loss++;
        reset()
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    //display losses on screen && guesses remaining countdown
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guesses;
}


game()

document.onkeyup = function(event) {
    // Captures guessed letter of key pressed
        var guessed_letter = event.key.toLowerCase();
        console.log(guessed_letter);
        checkGuess(guessed_letter);
        update_index()
        document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");
    }
    