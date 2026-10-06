// --------------------------------
// 1. Sum of Prime Numbers
// Find the sum of prime numbers between 20 and 150.
// --------------------------------

let sum = 0;
for (let i = 20; i <= 150; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      count++;
    }
  }
  if (count == 2) {
    sum = sum + i;
  }
}

console.log("Sum of prime numbers =", sum);

// --------------------------------
// 2. Average of Perfect Numbers
// Find the average of perfect numbers between 1 and 1000.
// --------------------------------

let total = 0;
let count = 0;
for (let i = 1; i <= 1000; i++) {
  let sum = 0;
  for (let j = 1; j < i; j++) {
    if (i % j == 0) {
      sum = sum + j;
    }
  }
  if (sum == i) {
    total = total + i;
    count++;
  }
}

console.log("Average of perfect numbers =", total / count);

// --------------------------------
// 3. Leap Years between 1900 and 2026.
// --------------------------------

for (let year = 1900; year <= 2026; year++) {
  if (year % 400 == 0) {
    console.log(year);
  } else if (year % 4 == 0 && year % 100 != 0) {
    console.log(year);
  }
}

// --------------------------------
// 4. Print palindrome numbers between 100 and 500.
// --------------------------------

for (let i = 100; i <= 500; i++) {
  let num = i;
  let reverse = 0;
  while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
  }
  if (i == reverse) {
    console.log(i);
  }
}

// --------------------------------
// 5. Numbers whose digit sum is 10.
// Range: 120 to 850.
// --------------------------------

for (let i = 120; i <= 850; i++) {
  let num = i;
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
  }
  if (sum == 10) {
    console.log(i);
  }
}

// --------------------------------
// 6. Pairs whose sum is 30.
// Print each pair only once.
// --------------------------------

for (let a = 1; a <= 50; a++) {
  for (let b = a; b <= 50; b++) {
    if (a + b == 30) {
      console.log(a, b);
    }
  }
}

// --------------------------------
// 7. Numbers between 10 and 300
// having exactly 3 factors.
// --------------------------------

for (let i = 10; i <= 300; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      count++;
    }
  }
  if (count == 3) {
    console.log(i);
  }
}

// --------------------------------
// 8. Print prime factors of every number
// between 20 and 50.
// --------------------------------
for (let i = 20; i <= 50; i++) {
  console.log("Prime factors of", i);
  for (let j = 2; j <= i; j++) {
    if (i % j == 0) {
      let count = 0;
      for (let k = 1; k <= j; k++) {
        if (j % k == 0) {
          count++;
        }
      }
      if (count == 2) {
        console.log(j);
      }
    }
  }
}

// --------------------------------
// 9. Armstrong numbers between 100 and 999.
// --------------------------------

for (let i = 100; i <= 999; i++) {
  let num = i;
  let sum = 0;
  while (num > 0) {
    let digit = num % 10;
    sum = sum + digit * digit * digit;
    num = Math.floor(num / 10);
  }
  if (sum == i) {
    console.log(i);
  }
}

// --------------------------------
// 10. Find the number between 50 and 150
// that has the maximum number of factors.
// --------------------------------
let maxCount = 0;
let maxNumber = 0;
for (let i = 50; i <= 150; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      count++;
    }
  }
  if (count > maxCount) {
    maxCount = count;
    maxNumber = i;
  }
}
console.log("Number with maximum factors =", maxNumber);
console.log("Number of factors =", maxCount);
