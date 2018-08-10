// Get The Elements
var numberField = document.querySelector('#number');
var displayMsg = document.querySelector('#text-number');

numberField.addEventListener('keyup',strNumber);

function strNumber() {
    var str = numberField.value.trim();
    var tempStr = '';
    var array = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE'];
    for(var i=0; i<str.length; i++){
        tempStr += array[str.charAt(i)] + " ";
    }
   displayMsg.textContent = tempStr;
}
