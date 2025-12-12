console.log('Before binding event');

// bind
let txtInput = document.querySelector('#txtInput');
let btnCheck = document.querySelector('#btnCheck');
let txtOutput = document.querySelector('#txtOutput');

// event
btnCheck.addEventListener('click', function() {
    // logic
    let str = txtInput.value;
    
    // Use includes("@") method to check if the email contains the required character
    if (str.includes("@")) {
        txtOutput.innerText = "Valid";
        txtOutput.className = "valid";
        console.log('Email is valid:', str);
    } else {
        txtOutput.innerText = "Invalid";
        txtOutput.className = "invalid";
        console.log('Email is invalid:', str);
    }
});
