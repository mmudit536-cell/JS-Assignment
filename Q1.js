var L = parseInt(prompt("Enter L:"));
var R = parseInt(prompt("Enter R:"));
var K = parseInt(prompt("Enter K:"));

var count = 0;

function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function sumDigits(n) {
    var sum = 0;
    var temp = n;
    while (temp > 0) {
        sum = sum + (temp % 10);
        temp = Math.floor(temp / 10);
    }
    return sum;
}

function hasZero(n) {
    var str = "" + n;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            return true;
        }
    }
    return false;
}

for (var x = L; x <= R; x++) {
    if (x % K === 0 && !hasZero(x) && isPrime(sumDigits(x))) {
        count = count + 1;
    }
}

alert(count);