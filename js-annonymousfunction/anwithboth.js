// Annonymous function With Input & With Return
//1. Return the smallest of three numbers.
let small = function (a, b, c) {
    if (a < b && a < c) {
        return a;
    }
    else if (b < a && b < c) {
        return b;
    }
    else {
        return c;
    }
};
console.log(small(10, 5, 8));

//2. Return whether a number is divisible by 3.
let divisible = function (a) {
    if (a % 3 == 0) {
        return "Divisible by 3";
    }
    else {
        return "Not divisible by 3";
    }
};
console.log(divisible(15));

// 3. Return the count of odd numbers between two given numbers.
let countodd = function (a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 1) {
            count = count + 1;
        }
    }
    return count;
};
console.log(countodd(1, 20));

//4. Return the sum of numbers divisible by 5 between two given numbers.
let sumfive = function (a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 5 == 0) {
            sum = sum + i;
        }
    }
    return sum;
};
console.log(sumfive(1, 50));

//5. Return the sum of squares from 1 to N.
let sumsquare = function (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i * i;
    }
    return sum;
};
console.log(sumsquare(5));