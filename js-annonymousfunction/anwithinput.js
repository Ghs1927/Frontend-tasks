// Annonymous function With Input & Without Return
//1. Check whether a given number is Positive, Negative, or Zero.
let check = function (a) {
    if (a > 0) {
        console.log("Positive");
    }
    else if (a < 0) {
        console.log("Negative");
    }
    else {
        console.log("Zero");
    }
};
check(-5);

//2. Print the smallest of two given numbers.
let small = function (a, b) {
    if (a < b) {
        console.log(a, "is smaller");
    }
    else {
        console.log(b, "is smaller");
    }
};
small(10, 6);

//3. Print all even numbers between two given numbers.
let even = function (a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
};
even(10, 30);

//4 Print the sum of odd numbers between two given numbers.
let sumodd = function (a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 1) {
            sum = sum + i;
        }
    }
    console.log(sum);
};
sumodd(1, 20);

//5 Print the squares of numbers from 1 to N.
let square = function (n) {
    for (let i = 1; i <= n; i++) {
        console.log(i, "square =", i * i);
    }
};
square(10);