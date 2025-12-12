function replaceSpace() {
    let str1 = document.getElementById("replaceTxtInput").value;
    let newStr1 = str1.replaceAll(' ', '');
    document.getElementById("replaceTxtResult").innerHTML = newStr1;
}

function countCharacters() {
    let str2 = document.getElementById("countTxtInput").value;
    str2 = str2.trim();
    let newStr2 = str2.length;
    document.getElementById("countTxtResult").innerHTML = newStr2;
}
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
