//  Named Function With Input & Without Return
// 1. Check whether a given number is positive, negative, or zero.
function checknumber(a) {
    if (a > 0) {
        console.log("Positive");
    } else if (a < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
checknumber(35);

// 2. Find the smallest of two numbers.
function smallestnum(b, c) {
    if (b < c) {
        console.log("b is smaller");
    } else {
        console.log("c is smaller");
    }
}
smallestnum(3, 12);

// 3. Find the largest of three numbers.
function largestthree(a, b, c) {
    if (a > b && a > c) {
        console.log("a is largest");
    } else if (b > a && b > c) {
        console.log("b is largest");
    } else {
        console.log("c is largest");
    }
}
largestthree(1, 5, 10);

// 4. Check whether a given number is divisible by 5.
function divisibleby5(n) {
    if (n % 5 == 0) {
        console.log("Divisible by 5");
    } else {
        console.log("Not divisible by 5");
    }
}
divisibleby5(15);

// 5. Print all even numbers between two given numbers.
function evennumbers(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
evennumbers(1, 10);

// 6. Print all numbers divisible by 3 between two given numbers.
function divby3(a, b) {
    for (let i = a; i <= b; i++) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}
divby3(1, 10);

// 7. Find the sum of even numbers between two given numbers.
function sumEven(a, b) {
    let sum = 0;

    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }

    console.log(sum);
}
sumEven(1, 10);

// 8. Find the sum of odd numbers between two given numbers.
function sumOdd(a, b) {
    let sum = 0;

    for (let i = a; i <= b; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }

    console.log(sum);
}
sumOdd(1, 10);

// 9. Count the numbers divisible by 4 between two given numbers.
function countdiv4(a, b) {
    let count = 0;

    for (let i = a; i <= b; i++) {
        if (i % 4 == 0) {
            count += 1;
        }
    }

    console.log(count);
}
countdiv4(5, 10);

// 10. Print the squares of numbers from 1 to N.
function squares(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i * i);
    }
}
squares(15);

// 11. Print the cubes of numbers from 1 to N.
function cubes(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i ** 3);
    }
}
cubes(3);

// 12. Print the first N natural numbers in reverse order.
function reverseNatural(n) {
    for (let i = n; i >= 1; i--) {
        console.log(i);
    }
}
reverseNatural(5);

// 13. Print numbers from N to M in reverse order.
function reverseRange(n, m) {
    for (let i = n; i >= m; i--) {
        console.log(i);
    }
}
reverseRange(1, 21);

// 14. Print the multiplication tables from 1 to N.
function tables(n) {
    for (let i = 1; i <= n; i++) {
        console.log("Table of", i);

        for (let j = 1; j <= 10; j++) {
            console.log(i, "X", j, "=", i * j);
        }
    }
}
tables(8);

// 15. Print a star square pattern.
function starSquare(n) {
    for (let i = 1; i <= n; i++) {
        let output = "";

        for (let j = 1; j <= n; j++) {
            output += "* ";
        }

        console.log(output);
    }
}
starSquare(9);