// Example 1 - Animal
// Inheritance without child constructor

class Animal {
  constructor(name) {
    this.name = name;
    console.log("Parent Constructor is called");
  }

  eat() {
    console.log(this.name, "is eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name, "is barking");
  }
}

let dog1 = new Dog("Tommy");
dog1.eat();
dog1.bark();

// Example 2 - Bank Account
// Using constructor, super() and super.method()

class Bank {
  constructor(bankName, branch) {
    this.bankName = bankName;
    this.branch = branch;
  }

  display() {
    console.log("Bank Name:", this.bankName);
    console.log("Branch:", this.branch);
  }
}

class Account extends Bank {
  constructor(bankName, branch, customerName, accountNumber) {
    super(bankName, branch);
    this.customerName = customerName;
    this.accountNumber = accountNumber;
  }

  display() {
    super.display();
    console.log("Customer Name:", this.customerName);
    console.log("Account Number:", this.accountNumber);
  }
}

let account1 = new Account("SBI", "Hyderabad", "Ravi", 123456);
account1.display();

// Example 3 - Food
// Using constructor, super() and super.method()

class Food {
  constructor(foodName, price) {
    this.foodName = foodName;
    this.price = price;
  }

  showFood() {
    console.log("Food Name:", this.foodName);
    console.log("Price:", this.price);
  }
}

class Restaurant extends Food {
  constructor(foodName, price, restaurantName, tableNumber) {
    super(foodName, price);
    this.restaurantName = restaurantName;
    this.tableNumber = tableNumber;
  }

  showFood() {
    super.showFood();
    console.log("Restaurant:", this.restaurantName);
    console.log("Table Number:", this.tableNumber);
  }
}

let order1 = new Restaurant("Biryani", 250, "Paradise", 5);
order1.showFood();

// Example 4 - Library
// Using constructor, super() and super.method()

class Library {
  constructor(libraryName, location) {
    this.libraryName = libraryName;
    this.location = location;
  }

  displayLibrary() {
    console.log("Library:", this.libraryName);
    console.log("Location:", this.location);
  }
}

class Book extends Library {
  constructor(libraryName, location, bookName, author) {
    super(libraryName, location);
    this.bookName = bookName;
    this.author = author;
  }

  displayLibrary() {
    super.displayLibrary();
    console.log("Book Name:", this.bookName);
    console.log("Author:", this.author);
  }
}

let book1 = new Book(
  "City Library",
  "Hyderabad",
  "Wings of Fire",
  "APJ Abdul Kalam",
);
book1.displayLibrary();
