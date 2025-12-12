console.log('Before binding event');

// bind
let txtInput = document.querySelector('#txtInput');
let btnCount = document.querySelector('#btnCount');
let txtOutput = document.querySelector('#txtOutput');

// event
btnCount.addEventListener('click', function() {
    // logic
    let str = txtInput.value;
    // Use trim() to remove leading and trailing spaces
    let trimmedStr = str.trim();
    // Get the length of the trimmed string
    let result = trimmedStr.length;
    // Display the result
    txtOutput.innerText = result;
    console.log('Input:', str);
    console.log('Trimmed:', trimmedStr);
    console.log('Character count:', result);
});