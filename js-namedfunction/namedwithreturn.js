// Named Function Without Input and With Return

// 1. Return the smallest of two numbers.
function small() {
    let a = 10;
    let b = 15;
    if (a < b) {
        return "A is smaller";
    } else {
        return "B is smaller";
    }
}
console.log(small());


// 2. Return whether a number is positive, negative, or zero.
function checknumber() {
    let n =50;
    if (n > 0) {
        return "Positive";
    } else if (n < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checknumber());


// 3. Return the sum of numbers from 1 to 50.
function sumofnums() {
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        sum = sum + i;
    }
    return sum;
}
console.log(sumofnums());


// 4. Return the product of numbers from 1 to 5.
function product() {
    let product = 1;
    for (let i = 1; i <= 5; i++) {
        product = product * i;
    }
    return product;
}
console.log(product());


// 5. Return the count of even numbers from 1 to 50.
function counteven() {
    let count = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            count += 1;
        }
    }
    return count;
}
console.log(counteven());


// 6. Return the count of odd numbers from 1 to 50.
function countodd() {
    let count = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 != 0) {
            count += 1;
        }
    }
    return count;
}
console.log(countodd());


// 7. Return the sum of odd numbers from 1 to 50.
function sumofodd() {
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumofodd());


// 8. Return whether a number is divisible by 5.
function divisibleby5() {
    let n = 25;
    if (n % 5 == 0) {
        return "Divisible by 5";
    } else {
        return "Not divisible by 5";
    }
}
console.log(divisibleby5());


// 9. Return the largest of three numbers.
function largestthree() {
    let a = 10;
    let b = 25;
    let c = 15;
    if (a > b && a > c) {
        return "A is largest";
    } else if (b > a && b > c) {
        return "B is largest";
    } else {
        return "C is largest";
    }
}
console.log(largestthree());


// 10. Return the reverse of a number.
function reversenumber() {
    let n = 456;
    let rev = 0;
    while (n != 0) {
        let ld = n % 10;
        rev = rev * 10 + ld;
        n = parseInt(n / 10);
    }
    return rev;
}
console.log(reversenumber());


// 11. Return the sum of digits of a number.
function sumofdigits() {
    let n = 456;
    let sum = 0;
    while (n != 0) {
        let ld = n % 10;
        sum += ld;
        n = parseInt(n / 10);
    }
    return sum;
}
console.log(sumofdigits());


// 12. Return whether a number is a perfect number.
function perfect() {
    let n = 28;
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            sum += i;
        }
    }
    if (sum == n) {
        return "Perfect number";
    } else {
        return "Not a Perfect number";
    }
}
console.log(perfect());


// 13. Return the first 5 multiples of a number as a string.
function multiples() {
    let n = 7;
    let output = "";
    for (let i = 1; i <= 5; i++) {
        output += n * i + " ";
    }
    return output;
}
console.log(multiples());


// 14. Return the count of numbers divisible by 5 from 1 to 100.
function divby5() {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0) {
            count += 1;
        }
    }
    return count;
}
console.log(divby5());


// 15. Return the sum of numbers divisible by 3 from 1 to 30.
function sumdivby3() {
    let sum = 0;
    for (let i = 1; i <= 30; i++) {
        if (i % 3 == 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumdivby3());