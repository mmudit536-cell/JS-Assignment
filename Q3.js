var N = parseInt(prompt("Enter N:"));
var K = parseInt(prompt("Enter K:"));

function isPalindrome(n) {
    var str = "" + n;
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

var X = -1;
for (var x = 0; x <= 100000; x++) {
    var num = N + x;
    if (num % K === 0 && isPalindrome(num)) {
        X = x;
        break;
    }
}

alert(X);