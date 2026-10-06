// 1. Without input → Without return
// Logic 1
class Pattern {
  static star() {
    for (let i = 1; i <= 5; i++) {
      let output = "";
      for (let j = i; j <= 5; j++) {
        output += "*";
      }
      console.log(output);
    }
  }
}

// Logic 2
class Student {
  static details() {
    let name = "king";
    let age = 21;
    let course = "python";
    console.log(" name is", name);
    console.log(" age is", age);
    console.log(" course is", course);
  }
}

Student.details();
Pattern.star();

// 2. With input → Without return
// Logic 1
class Person {
  static checkage(age) {
    if (age <= 18) {
      console.log("person not eligible to vote");
    } else {
      console.log("person is eligible to vote");
    }
  }
}

Person.checkage(21);
Person.checkage(16);

// Logic 2
class SumOfDigits {
  static digit(n) {
    let sum = 0;
    while (n != 0) {
      let ld = n % 10;
      sum += ld;
      n = parseInt(n / 10);
    }
    console.log("the sum of the digits is", sum);
  }
}
SumOfDigits.digit(2345);
SumOfDigits.digit(987);

// 3. Without input → With return
// Logic 1
class Factorial {
  static calculate() {
    let n = 5;
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
}

console.log(Factorial.calculate());

// Logic 2
class EvenSum {
  static calc() {
    let n = 10;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0) {
        sum += i;
      }
    }
    return sum;
  }
}

console.log(EvenSum.calc());

// 4. With input → With return
// Logic 1
class Reverse {
  static reverse(n) {
    let rev = 0;
    while (n != 0) {
      let ld = n % 10;
      rev = rev * 10 + ld;
      n = parseInt(n / 10);
    }
    return rev;
  }
}
console.log(Reverse.reverse(12345));

// Logic 2
class EvenDigits {
  static count(n) {
    let count = 0;
    while (n != 0) {
      let ld = n % 10;
      if (ld % 2 == 0) {
        count++;
      }
      n = parseInt(n / 10);
    }
    return count;
  }
}

console.log(EvenDigits.count(28453));
