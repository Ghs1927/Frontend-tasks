// 1. Print 1 to 50, skip multiples of 3, stop at 40.

for (let i = 1; i <= 50; i++) {
  if (i == 40) {
    break;
  }
  if (i % 3 == 0) {
    continue;
  }
  console.log(i);
}

// 2. Print odd numbers, skip evens, stop at first multiple of 7.

for (let i = 1; i <= 50; i++) {
  if (i % 7 == 0) {
    break;
  }
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}

// 3. Extract 5830421, skip odd digits, stop at 0.

let num = 5830421;
while (num > 0) {
  let digit = num % 10;
  num = Math.floor(num / 10);
  if (digit == 0) {
    break;
  }
  if (digit % 2 != 0) {
    continue;
  }
  console.log(digit);
}

// 4. Extract 8325147, print digits until 5.

let number = 8325147;
while (number > 0) {
  let digit = number % 10;
  number = Math.floor(number / 10);
  if (digit == 5) {
    break;
  }
  console.log(digit);
}

// 5. Search from 51, skip non-multiples of 9, stop at first multiple.

for (let i = 51; i <= 100; i++) {
  if (i % 9 != 0) {
    continue;
  }
  console.log("First multiple of 9:", i);
  break;
}
