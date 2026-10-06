// Named Function With Input (Arguments) & With Return

// 1. Return the smallest of two numbers.
function smallof2(a, b) {
    if (a < b) {
        return "A is smaller";
    } else {
        return "B is smaller";
    }
}
console.log(smallof2(7, 12));

// 2. Return the largest of three numbers.
function larof3(a, b, c) {
    if (a > b && a > c) {
        return "A is largest";
    } else if (b > a && b > c) {
        return "B is largest";
    } else {
        return "C is largest";
    }
}
console.log(larof3(10, 25, 15));

// 3. Return the smallest of three numbers.
function smallof3(a, b, c) {
    if (a < b && a < c) {
        return "A is smallest";
    } else if (b < a && b < c) {
        return "B is smallest";
    } else {
        return "C is smallest";
    }
}
console.log(smallof3(10, 5, 15));

// 4. Return whether a number is positive, negative, or zero.
function checknum(a) {
    if (a > 0) {
        return "Positive";
    } else if (a < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checknum(-8));

// 5. Return whether a number is divisible by 5.
function divby5(a) {
    if (a % 5 == 0) {
        return "Divisible by 5";
    } else {
        return "Not divisible by 5";
    }
}
console.log(divby5(25));

// 6. Return the sum of even numbers within a given range.
function sumeven(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sumeven(1, 20));


// 7. Return the sum of odd numbers within a given range.
function sumodd(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sumodd(1, 20));


// 8. Return the count of even numbers within a given range.
function counteven(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 == 0) {
            count += 1;
        }
    }
    return count;
}
console.log(counteven(1, 20));


// 9. Return the count of odd numbers within a given range.
function countodd(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (i % 2 != 0) {
            count += 1;
        }
    }
    return count;
}
console.log(countodd(1, 20));


// 10. Return the sum of digits of a given number.
function sumdigits(a) {
    let sum = 0;
    while (a != 0) {
        let ld = a % 10;
        sum = sum + ld;
        a = parseInt(a / 10);
    }
    return sum;
}
console.log(sumdigits(987));


// 11. Return the product of digits of a given number.
function productdigits(a) {
    let product = 1;
    while (a != 0) {
        let ld = a % 10;
        product = product * ld;
        a = parseInt(a / 10);
    }
    return product;
}
console.log(productdigits(123));


// 12. Return the sum of numbers divisible by 3 within a range.
function sumdiv3(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (i % 3 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sumdiv3(1, 30));


// 13. Return the count of numbers divisible by 4 within a range.
function countdiv4(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        if (i % 4 == 0) {
            count += 1;
        }
    }
    return count;
}
console.log(countdiv4(1, 40));


// 14. Return the sum of squares from 1 to N.
function sumsquares(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i ** 2;
    }
    return sum;
}
console.log(sumsquares(5));


// 15. Return the sum of cubes from 1 to N.
function sumcubes(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i ** 3;
    }
    return sum;
}
console.log(sumcubes(5));