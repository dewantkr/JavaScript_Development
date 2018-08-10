document.querySelector('#time').addEventListener('keyup',function() {
    var time = document.querySelector('#time').value;
    if(time === ''){
        document.querySelector('#display').textContent = '';
    }
   else if(time <= 12){
        document.querySelector('#display').textContent = 'Good Morning';
    }
    else if(time >12 && time <= 17){
        document.querySelector('#display').textContent = 'Good AfterNoon';
    }
    else if(time >17 && time <= 23){
        document.querySelector('#display').textContent = 'Good Evening';
    }
    else{
        document.querySelector('#display').textContent = 'Please enter Proper Time';
    }

});



