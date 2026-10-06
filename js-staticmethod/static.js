// 1. Without input and without return
// Check whether a number is positive or negative

class NumberCheck {
  static check() {
    let n = -10;
    if (n >= 0) {
      console.log("Positive number");
    } else {
      console.log("Negative number");
    }
  }
}
NumberCheck.check();

// 2. With input and without return
// Check whether a number is even or odd

class EvenOdd {
  static checknum(n) {
    if (n % 2 == 0) {
      console.log(n, "is Even");
    } else {
      console.log(n, "is Odd");
    }
  }
}
EvenOdd.checknum(25);

// 3. Without input and with return
// Find the largest among two numbers

class Largest {
  static findnum() {
    let a = 45;
    let b = 30;
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
}
let result = Largest.findnum();
console.log("Largest number:", result);

// 4. With input and with return
// Check whether a person is eligible to vote

class Voting {
  static checkage(age) {
    if (age >= 18) {
      return "Eligible to vote";
    } else {
      return "Not eligible to vote";
    }
  }
}
let status = Voting.checkage(20);
console.log(status);
