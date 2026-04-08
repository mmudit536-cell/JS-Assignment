var base = parseFloat(prompt("Enter base:"));
var distance = parseFloat(prompt("Enter distance:"));
var minutesLate = parseFloat(prompt("Enter minutesLate:"));
var seed = parseInt(prompt("Enter seed:"));

var fare = base + (7 * distance);

if (minutesLate > 15) {
    fare += 20;
}

if (distance > 10) {
    fare += (0.10 * fare);
}

if (seed % 2 !== 0) {
    fare -= seed;
} else {
    fare += seed;
}

var finalFare = Math.ceil(fare / 5) * 5;

alert(finalFare);