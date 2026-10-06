// annonymous function Without Input & Without Return
//1. Print numbers from 20 to 1.
let num = function () {
    for (let i = 20; i >= 1; i--) {
        console.log(i);
    }
};
num();

// 2. Print all odd numbers from 1 to 50.
let odd = function () {
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
};
odd();

// 3. Print numbers divisible by 5 from 1 to 100.
let divisible = function () {
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0) {
            console.log(i);
        }
    }
};
divisible();

// 4. Print the sum of numbers from 1 to 50.
let sum = function () {
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        sum = sum + i;
    }
    console.log(sum);
};
sum();

// 5. Print a square star pattern of 5 rows and 5 columns.
let pattern = function () {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 5; j++) {
            output = output + "* ";
        }
        output = output + "\n";
    }
    console.log(output);
};
pattern();