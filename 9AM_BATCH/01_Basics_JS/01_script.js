document.querySelector('#number').addEventListener('keyup',function() {
    var time = document.querySelector('#number').value;
    if(time === ''){
        document.querySelector('#display').textContent = "";
    }
    else if(time <= 12){
        document.querySelector('#display').textContent = "Good Morning";
    }
    else if(time>12 && time <= 17){
        document.querySelector('#display').textContent = "Good Afternoon";
    }
    else if(time >17 && time <= 24){
        document.querySelector('#display').textContent = "Good Evening";
    }
    else{
        document.querySelector('#display').textContent = "Please Enter proper time";
    }
});