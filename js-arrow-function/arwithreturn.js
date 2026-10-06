// Arrow Function Without Input & With Return
//1. Return the sum of odd numbers from 1 to 100.
let sumodd = () => {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 1) {
            sum = sum + i;
        }
    }
    return sum;
};
console.log(sumodd());

//2. Return the product of numbers from 1 to 5.
let product = () => {
    let product = 1;
    for (let i = 1; i <= 5; i++) {
        product = product * i;
    }
    return product;
};
console.log(product());


//3. Return the sum of digits of the fixed number 4567.
let sumdigit = () => {
    let n = 4567;
    let sum = 0;
    while (n != 0) {
        let ld = n % 10;
        sum = sum + ld;
        n = parseInt(n / 10);
    }
    return sum;
};
console.log(sumdigit());

//4. Return the product of digits of the fixed number 1234.
let productdigit = () => {
    let n = 1234;
    let product = 1;
    while (n != 0) {
        let ld = n % 10;
        product = product * ld;
        n = parseInt(n / 10);
    }
    return product;
};
console.log(productdigit());

//5. Return the count of odd numbers from 1 to 100.
let countodd = () => {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 1) {
            count = count + 1;
        }
    }
    return count;
};
console.log(countodd());