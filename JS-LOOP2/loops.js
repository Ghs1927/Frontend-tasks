// Print numbers from 1 lakh to 2 lakh.
for (let i = 100000; i <= 200000; i++) {
  console.log(i);
}

// Print the sequence: 1 4 9 16 25 36 49 ... 100
for (let i = 1; i <= 10; i = i + 1) {
  console.log(i ** 2);
}

// Print the sequence: 1 8 27 64 125 216 ... 1000
for (let i = 1; i <= 10; i = i + 1) {
  console.log(i ** 3);
}

// Print numbers from 5 lakh to 4 lakh in reverse order.
for (let i = 500000; i >= 400000; i = i - 1) {
  console.log(i);
}

// Print the sequence: 2.5 2 1.5 1 0.5

for (i = 2.5; i >= 0.5; i = i - 0.5) {
  console.log(i);
}

// 1.Find the average of numbers from 1 to N.
// Example: If N = 5, calculate the average of 1, 2, 3, 4, 5.
let n = 10;
let sum = 0;
let count = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
  count = count + 1;
}
let avg = sum / count;
console.log("average of ", n, "numbers is ", avg);

// Find the sum of squares of numbers from 1 to N.
// Example: If N = 5, calculate 1² + 2² + 3² + 4² + 5².
let s = 4;
let sumOfS = 0;
for (let i = 1; i <= s; i++) {
  sumOfS = sumOfS + i ** 2;
}
console.log("sum of squares is", sumOfS);

// Find the sum of cubes of numbers from 1 to N.
//     Example: If N = 5, calculate 1³ + 2³ + 3³ + 4³ + 5³

let x = 5;
let sumOfX = 0;
for (let i = 1; i <= x; i++) {
  sumOfX = sumOfX + i ** 3;
}
console.log("sum of cubes is", sumOfX);

// Calculate the power of a number without using the ** operator.
//     Example: If base = 2 and power = 5, calculate 2 × 2 × 2 × 2 × 2.
let base = 3;
let power = 4;
let result = 1;
for (let i = 1; i <= power; i++) {
  result = result * base;
}
console.log("result is", result);

// Display the first N terms of the Fibonacci series.
//     Example: If N = 7, display 0, 1, 1, 2, 3, 5, 8.
let y = 7;
let a = 0;
let b = 1;
for (let i = 1; i <= y; i++) {
  console.log(a);
  c = a + b;
  a = b;
  b = c;
}

// Display the first N terms of the series:
// 1, 1/2, 1/3, 1/4, ...
// Example: If N = 4, display 1, 1/2, 1/3, 1/4.
let m = 4;
for (let i = 1; i <= m; i++) {
  if (i == 1) {
    console.log("1");
  } else {
    console.log("1/" + i);
  }
}

// Display the first N terms of the series:
//     1, 11, 111, 1111, 11111, ...
//     Example: If N = 5, display 1, 11, 111, 1111, 11111.
let z = 5;
let str = 1;
for (let i = 1; i <= z; i++) {
  if (i == 1) {
    console.log("1");
  } else {
    str = str + "1";
    console.log(str);
  }
}

// Display the first N terms of the series:
//     1, 3, 9, 27, 81, ...
//     Each term is obtained by multiplying the previous term by 3.
let v = 5;
let mul = 1;
for (let i = 1; i <= v; i++) {
  if (i == 1) {
    console.log(mul);
  } else {
    mul = mul * 3;
    console.log(mul);
  }
}
