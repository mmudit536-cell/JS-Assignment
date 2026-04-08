var N = parseInt(prompt("Enter N:"));
var seed = parseInt(prompt("Enter seed:"));

var current = N;

for (var i = 0; i < 3; i++) {
    if (current % 2 === 0) {
        current = Math.floor(current / 2) + seed;
    } else {
        current = current * 3 - seed;
    }
}

var finalNum = Math.floor(current);
var result = "NO";

if (finalNum >= 100 && finalNum <= 999) {
    var strNum = "" + finalNum;
    var middleDigit = parseInt(strNum[1]);
    if (middleDigit === seed) {
        result = "YES";
    }
}

alert(result + ", " + finalNum);