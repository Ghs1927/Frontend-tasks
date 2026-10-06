// ------------------------
// if-else
// ------------------------

// 1. Check whether a number is a 3-digit number or not.

let num = 456;

if (num >= 100 && num <= 999) {
  console.log(num, "is a three digit number");
} else {
  console.log(num, "is not a three digit number");
}

// 2. Check whether a number is divisible by both 3 and 5.

let number = 75;

if (number % 3 == 0 && number % 5 == 0) {
  console.log(number, "is divisible by 3 and 5");
} else {
  console.log(number, "is not divisible by 3 and 5");
}

// 3. Check whether a triangle is valid or not.

let side1 = 5;
let side2 = 7;
let side3 = 9;

if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
  console.log("Valid triangle");
} else {
  console.log("Invalid triangle");
}

// 4. Check whether a number is a multiple of 10.

let value = 80;

if (value % 10 == 0) {
  console.log(value, "is a multiple of 10");
} else {
  console.log(value, "is not a multiple of 10");
}

// ------------------------
// if-else-if
// ------------------------

// 1. Check the type of triangle.

let a = 6;
let b = 6;
let c = 6;

if (a == b && b == c) {
  console.log("Equilateral triangle");
} else if (a == b || b == c || a == c) {
  console.log("Isosceles triangle");
} else {
  console.log("Scalene triangle");
}

// 2. Calculate electricity bill.

let units = 175;
let bill;

if (units <= 100) {
  bill = units * 2;
} else if (units <= 200) {
  bill = units * 3;
} else if (units <= 300) {
  bill = units * 5;
} else {
  bill = units * 7;
}

console.log("Electricity Bill = ₹" + bill);

// 3. Display age category.

let age = 45;

if (age < 13) {
  console.log("Child");
} else if (age <= 19) {
  console.log("Teenager");
} else if (age <= 59) {
  console.log("Adult");
} else {
  console.log("Senior Citizen");
}

// 4. Calculate discount based on shopping amount.

let amount = 6200;

if (amount < 1000) {
  console.log("No discount");
} else if (amount < 5000) {
  console.log("10% discount");
} else if (amount < 10000) {
  console.log("20% discount");
} else {
  console.log("30% discount");
}

// 5. Display season based on month number.

let month = 11;

if (month >= 3 && month <= 5) {
  console.log("Spring");
} else if (month >= 6 && month <= 8) {
  console.log("Summer");
} else if (month >= 9 && month <= 11) {
  console.log("Autumn");
} else if (month == 12 || month == 1 || month == 2) {
  console.log("Winter");
} else {
  console.log("Invalid month");
}

// 6. Check whether a year is a Leap Year.

let year = 2028;

if (year % 400 == 0) {
  console.log("Leap Year");
} else if (year % 4 == 0 && year % 100 != 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}

// ------------------------
// Nested if
// ------------------------

// 1. Check blood donation eligibility.

let donorAge = 24;
let weight = 55;

if (donorAge >= 18 && donorAge <= 60) {
  if (weight > 50) {
    console.log("Eligible for blood donation");
  } else {
    console.log("Not eligible - weight should be above 50 kg");
  }
} else {
  console.log("Not eligible - age should be between 18 and 60");
}

// 2. Display grade only if the student passes all 4 subjects.

let maths = 78;
let physics = 65;
let chemistry = 82;
let computer = 90;

let average = (maths + physics + chemistry + computer) / 4;

if (maths >= 35 && physics >= 35 && chemistry >= 35 && computer >= 35) {
  if (average >= 90) {
    console.log("Grade A", average);
  } else if (average >= 75) {
    console.log("Grade B", average);
  } else if (average >= 60) {
    console.log("Grade C", average);
  } else {
    console.log("Grade D", average);
  }
} else {
  console.log("Student failed in one or more subjects");
}

// 3. Check scholarship eligibility.

let studentAge = 21;
let score = 92;

if (studentAge > 18) {
  if (score > 86) {
    console.log("Student is eligible for scholarship");
  } else {
    console.log("Not eligible - score should be above 86");
  }
} else {
  console.log("Not eligible - age should be above 18");
}
