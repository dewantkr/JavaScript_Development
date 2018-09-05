// Get the HTML Elements
var numberElement = document.querySelector('#number');
var displayElement = document.querySelector('#text-number');
var numberArray = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];

// Add Event Listener for NumberElement
numberElement.addEventListener('keyup',getStringData);

// application logic
function getStringData() {
    var tempStr = '';
    var numberStr = numberElement.value.toString();
    for(var i=0; i<numberStr.length; i++){
        var index = parseInt(numberStr.charAt(i));
        tempStr += numberArray[index] + " " ;
    }
    displayElement.textContent = tempStr;
}
