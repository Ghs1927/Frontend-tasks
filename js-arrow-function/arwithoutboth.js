
// Arrow Function Without Input & Without Return
//1 Print numbers from 20 to 1.
let nums = () => {
    for (let i = 20; i >= 1; i--) {
        console.log(i);
    }
};
nums();

//2. Print all even numbers from 1 to 40.
let even = () => {
    for (let i = 1; i <= 40; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
};
even();

//3. Print numbers divisible by 3 from 1 to 50.
let div = () => {
    for (let i = 1; i <= 50; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
};
div();

//4. Print the multiplication table of 7.
let multiply = () => {
    let a = 7;
    for (let i = 1; i <= 10; i++) {
        console.log(a, "X", i, "=", a * i);
    }
};
multiply();

//5. Print the sum of numbers from 1 to 30.
let sum = () => {
    let sum = 0;
    for (let i = 1; i <= 30; i++) {
        sum = sum + i;
    }
    console.log(sum);
};
sum();