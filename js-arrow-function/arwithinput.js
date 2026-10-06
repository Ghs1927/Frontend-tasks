// Arrow Function With Input & Without Return
//1 Print numbers from the first given number to the second given number.
let numbers = (a, b) => {
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
};
numbers(5, 15);

//2 Print all odd numbers between two given numbers.
let odd = (a, b) => {
    for (let i = a; i <= b; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
};
odd(10, 30);

//3. Print the sum of even numbers between two given numbers.
let sumeven = (a, b) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
};
sumeven(1, 20);

//4. Print the squares from 1 to N.
let square = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i, "square =", i * i);
    }
};
square(10);

//5. Print the factors of a given number.
let factors = (n) => {
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            console.log(i);
        }
    }
};
factors(24);