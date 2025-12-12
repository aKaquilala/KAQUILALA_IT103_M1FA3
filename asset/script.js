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
