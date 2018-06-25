var textAreaBorder = document.querySelector("#text-area");
var textArea = document.querySelector("#text-area");
var originalText = document.querySelector(".text-section-div p").innerHTML;
var resetButton = document.querySelector("#reset");
var theTimer = document.querySelector(".timer");
var congratsSection = document.querySelector('.cong-section');

var timer = 0;
var minutes = 0;
var seconds = 0;
var milliSeconds = 0;
var currentTime = "";
var interval = 0;

// Add leading zero to numbers 9 or below:
function leadingZero(time) {
    if(time <= 9){
        return "0" + time;
    }
    else{
        return time;
    }
}


// Run a standard minute/second/hundredths timer:
//minutes = Math.floor((timer/100)/60);
//seconds = Math.floor((timer/100) - (minutes * 60));
//milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));
function startTimer() {

    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer- (seconds * 100) - (minutes * 6000));

    minutes = leadingZero(minutes);
    seconds = leadingZero(seconds);
    milliSeconds = leadingZero(milliSeconds);

    currentTime = minutes + ":" + seconds + ":" + milliSeconds;

    theTimer.innerHTML = currentTime;
    timer++;
}



// Match the text entered with the provided text on the page:
function spellCheck() {
    var textEntered = textArea.value;
    var partialText = originalText.substring(0,textEntered.length);
    if(textEntered === originalText){
        textAreaBorder.style.borderColor = "forestgreen";
        clearInterval(interval); // to stop the timer
        congratsSection.style.display = 'block'; // to display Congratulations
    }
    else{
        if(textEntered === partialText){
            textAreaBorder.style.borderColor = "lightblue";
        }
        else{
            textAreaBorder.style.borderColor = "orangered";
        }
    }

}



// Start the timer:
function start() {
    var textEnteredLength = textArea.value.length;
    if(textEnteredLength === 0){
        // start Timer
        interval = setInterval(startTimer,10);
    }
}


// Reset everything:


// Event listeners for keyboard input and the reset button:
textArea.addEventListener('keypress',start);
textArea.addEventListener('keyup',spellCheck);