// employee
class Employee {
  constructor() {
    if (new.target === Employee) {
      throw new Error("Object Cannot Be Created");
    }
  }

  cal_sal() {
    throw new Error("Abstract Method");
  }
}

class FullTimeEmp extends Employee {
  constructor(months, sal) {
    super();
    this.months = months;
    this.sal = sal;
    this.totalSal = months * sal;
  }

  cal_sal() {
    console.log("Fulltime Emp: Total Salary =", this.totalSal);
  }
}

class Freelancer extends Employee {
  constructor(hours, rate) {
    super();
    this.hours = hours;
    this.rate = rate;
    this.totalSal = hours * rate;
  }

  cal_sal() {
    console.log("Freelancer: Total Salary =", this.totalSal);
  }
}

class PartTimeEmp extends Employee {
  constructor(modules, rate) {
    super();
    this.modules = modules;
    this.rate = rate;
    this.totalSal = modules * rate;
  }

  cal_sal() {
    console.log("Parttime Emp: Total Salary =", this.totalSal);
  }
}

let full = new FullTimeEmp(2, 95000);
full.cal_sal();

let free = new Freelancer(40, 500);
free.cal_sal();

let part = new PartTimeEmp(5, 3000);
part.cal_sal();

// electricity bill

class ElectricityBill {
  constructor() {
    if (new.target === ElectricityBill) {
      throw new Error("Object Cannot Be Created");
    }
  }

  calculateBill() {
    throw new Error("Abstract Method");
  }
}

class HomeBill extends ElectricityBill {
  constructor(units) {
    super();
    this.units = units;
  }

  calculateBill() {
    let bill = 0;

    if (this.units <= 100) {
      bill = this.units * 2;
    } else if (this.units <= 200) {
      bill = 100 * 2 + (this.units - 100) * 3;
    } else {
      bill = 100 * 2 + 100 * 3 + (this.units - 200) * 5;
    }

    bill = bill + 100;
    console.log("Electricity Bill =", bill);
  }
}

let home = new HomeBill(150);
home.calculateBill();

// shopping bill

class OrderBill {
  constructor() {
    if (new.target === OrderBill) {
      throw new Error("Object Cannot Be Created");
    }
  }

  calculateBill() {
    throw new Error("Abstract Method");
  }
}

class Shopping extends OrderBill {
  constructor(price1, qty1, price2, qty2) {
    super();
    this.price1 = price1;
    this.qty1 = qty1;
    this.price2 = price2;
    this.qty2 = qty2;
  }

  calculateBill() {
    let total = this.price1 * this.qty1 + this.price2 * this.qty2;

    let discount = 0;

    if (total >= 5000) {
      discount = (total * 10) / 100;
    }

    let amount = total - discount;
    let gst = (amount * 18) / 100;
    let finalBill = amount + gst;

    console.log("Total Price =", total);
    console.log("Discount =", discount);
    console.log("GST =", gst);
    console.log("Final Bill =", finalBill);
  }
}

let order = new Shopping(3000, 2, 1000, 1);
order.calculateBill();

// delivery charges

class Delivery {
  constructor() {
    if (new.target === Delivery) {
      throw new Error("Object Cannot Be Created");
    }
  }

  calculateCost() {
    throw new Error("Abstract Method");
  }
}

class ExpressDelivery extends Delivery {
  calculateCost(distance, weight, express) {
    let distanceCost = distance * 12;
    let weightCost = weight * 20;
    let expressCost = 0;

    if (express === true) {
      expressCost = 150;
    }

    let total = distanceCost + weightCost + expressCost;
    let tax = (total * 5) / 100;
    let finalCost = total + tax;

    console.log("Distance Cost =", distanceCost);
    console.log("Weight Cost =", weightCost);
    console.log("Express Cost =", expressCost);
    console.log("Tax =", tax);
    console.log("Final Delivery Cost =", finalCost);
  }
}

let delivery = new ExpressDelivery();
delivery.calculateCost(20, 5, true);
