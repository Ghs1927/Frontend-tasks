// vehicle multilevel inheritance and polymorphism
// class Vehicle {
//   start() {
//     console.log("Vehicle is starting");
//   }

//   speed() {
//     console.log("Vehicle speed is normal");
//   }
// }

// class Car extends Vehicle {
//   speed() {
//     console.log("Car speed is 100 km/hr");
//   }

//   music() {
//     console.log("Music system is available");
//   }
// }

// class SportsCar extends Car {
//   speed() {
//     console.log("Sports Car speed is 250 km/hr");
//   }

//   turbo() {
//     console.log("Turbo mode is enabled");
//   }
// }

// let vehicle = new Vehicle();
// vehicle.speed();

// let car = new Car();
// car.speed();
// car.music();

// let sports = new SportsCar();
// sports.speed();
// sports.music();
// sports.turbo();

//employee polymorphism
// class Employee {
//   work() {
//     console.log("Employee is working");
//   }

//   salary() {
//     console.log("Employee salary is 20000");
//   }
// }

// class Developer extends Employee {
//   salary() {
//     console.log("Developer salary is 40000");
//   }

//   coding() {
//     console.log("Developer is writing code");
//   }
// }

// class SeniorDeveloper extends Developer {
//   salary() {
//     console.log("Senior Developer salary is 70000");
//   }

//   project() {
//     console.log("Senior Developer is handling project");
//   }
// }

// let emp = new Employee();
// emp.salary();

// let dev = new Developer();
// dev.salary();
// dev.coding();

// let senior = new SeniorDeveloper();
// senior.salary();
// senior.coding();
// senior.project();

// animal
class Animal {
  sound() {
    console.log("Animal makes a sound");
  }

  eat() {
    console.log("Animal is eating");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog says Bow Bow");
  }

  walk() {
    console.log("Dog is walking");
  }
}

class Puppy extends Dog {
  sound() {
    console.log("Puppy says Woof Woof");
  }

  play() {
    console.log("Puppy is playing");
  }
}

let animal = new Animal();
animal.sound();

let dog = new Dog();
dog.sound();
dog.eat();
dog.walk();

let puppy = new Puppy();
puppy.sound();
puppy.eat();
puppy.walk();
puppy.play();
