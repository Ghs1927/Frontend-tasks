// Annonymous function Without Input & With Return
//1 Return the sum of even numbers from 1 to 50.
let sumeven = function () {
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
};
console.log(sumeven());

//2 Return the sum of odd numbers from 1 to 50.
let sumodd = function () {
    let sum = 0;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 == 1) {
            sum = sum + i;
        }
    }
    return sum;
};
console.log(sumodd());

//3. Return the count of even numbers from 1 to 100.
let counteven = function () {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            count = count + 1;
        }
    }
    return count;
};
console.log(counteven());

//4. Return the sum of digits of a fixed number 9876.
let sumdigit = function () {
    let n = 9876;
    let sum = 0;
    while (n != 0) {
        let ld = n % 10;
        sum = sum + ld;
        n = parseInt(n / 10);
    }
    return sum;
};
console.log(sumdigit());

//5. Return the product of digits of a fixed number 234.
let productdigit = function () {
    let n = 234;
    let product = 1;
    while (n != 0) {
        let ld = n % 10;
        product = product * ld;
        n = parseInt(n / 10);
    }
    return product;
};
console.log(productdigit());