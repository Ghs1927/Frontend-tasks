//Named Function Without Input & Without Return
// 1. Find the largest of three numbers.
function largestThree() {
  let a = 40;
  let b = 95;
  let c = 65;
  if (a > b && a > c) {
    console.log("A is largest");
  } else if (b > a && b > c) {
    console.log("B is largest");
  } else {
    console.log("C is largest");
  }
}
largestThree();

// 2. Find the smallest of two numbers.
function smallestTwo() {
  let a = 28;
  let b = 1;
  if (a < b) {
    console.log("A is smaller");
  } else {
    console.log("B is smaller");
  }
}
smallestTwo();

// 3. Print even numbers from 1 to 20.
function evenNumbers() {
  let n = 20;
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
evenNumbers();

// 4. Print odd numbers from 1 to 20.
function oddNumbers() {
  let n = 20;
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
oddNumbers();

// 5. Find the sum of even numbers from 1 to 50.
function sumEven() {
  let sum = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}
sumEven();

// 6. Find the sum of odd numbers from 1 to 50.
function sumOdd() {
  let sum = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
      sum = sum + i;
    }
  }
  console.log(sum);
}
sumOdd();

// 7. Count the even numbers from 1 to 50.
function countEven() {
  let count = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
      count += 1;
    }
  }
  console.log(count);
}
countEven();

// 8. Count the odd numbers from 1 to 50.
function countOdd() {
  let count = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 != 0) {
      count += 1;
    }
  }
  console.log(count);
}
countOdd();

// 9. Print numbers from 10 to 1.
function reverseNumbers() {
  for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
}
reverseNumbers();

// 10. Find the sum of numbers from 10 to 20.
function sumRange() {
  let sum = 0;
  for (let i = 10; i <= 20; i++) {
    sum = sum + i;
  }
  console.log(sum);
}
sumRange();

// 11. Print the squares of numbers from 1 to 10.
function squares() {
  let n = 10;
  for (let i = 1; i <= n; i++) {
    console.log(i * i);
  }
}
squares();

// 12. Print the cubes of numbers from 1 to 5.
function cubes() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    console.log(i ** 3);
  }
}
cubes();

// 13. Print numbers divisible by 5 from 1 to 50.
function divisibleBy5() {
  let n = 50;
  for (let i = 1; i <= n; i++) {
    if (i % 5 == 0) {
      console.log(i);
    }
  }
}
divisibleBy5();

// 14. Print the first 10 multiples of 3.
function multiplesOf3() {
  let n = 3;
  for (let i = 1; i <= 10; i++) {
    console.log(n * i);
  }
}
multiplesOf3();

// 15. Print a star square pattern.
function starSquare() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let output = "";
    for (let j = 1; j <= n; j++) {
      output += "* ";
    }
    console.log(output);
  }
}
starSquare();