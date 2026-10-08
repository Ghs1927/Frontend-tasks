// cart
class cart {
  #cartid;
  #total;

  constructor(cartid, total) {
    this.#cartid = cartid;
    this.#total = total;
  }

  getcartid() {
    return this.#cartid;
  }

  gettotal() {
    return this.#total;
  }

  setcartid(newid) {
    this.#cartid = newid;
  }

  settotal(newtotal) {
    this.#total = newtotal;
  }

  addproduct(price) {
    this.#total = this.#total + price;
    console.log("product added total:", this.#total);
  }

  removeproduct(price) {
    if (this.#total >= price) {
      this.#total = this.#total - price;
      console.log("product removed total:", this.#total);
    } else {
      console.log("Invalid amount");
    }
  }
}

let c = new cart(101, 0);

console.log("before");
console.log("cart id:", c.getcartid());
console.log("total:", c.gettotal());

c.addproduct(1000);
c.addproduct(500);
c.removeproduct(500);

console.log("final total:", c.gettotal());

// mobile recahrge
class mobile {
  #number;
  #balance;

  constructor(number, balance) {
    this.#number = number;
    this.#balance = balance;
  }

  getnumber() {
    return this.#number;
  }

  getbalance() {
    return this.#balance;
  }

  setnumber(newnumber) {
    this.#number = newnumber;
  }

  setbalance(newbalance) {
    this.#balance = newbalance;
  }

  recharge(amount) {
    this.#balance = this.#balance + amount;
    console.log("recharge added balance:", this.#balance);
  }

  spend(amount) {
    if (this.#balance >= amount) {
      this.#balance = this.#balance - amount;
      console.log("amount spent balance:", this.#balance);
    } else {
      console.log("Insufficient balance");
    }
  }
}

let m = new mobile(9876543210, 0);

console.log("before");
console.log("mobile number:", m.getnumber());
console.log("balance:", m.getbalance());

m.recharge(500);
m.spend(100);

console.log("final balance:", m.getbalance());

// fees
class student {
  #rollno;
  #name;
  #fees;

  constructor(rollno, name, fees) {
    this.#rollno = rollno;
    this.#name = name;
    this.#fees = fees;
  }

  getrollno() {
    return this.#rollno;
  }

  getname() {
    return this.#name;
  }

  getfees() {
    return this.#fees;
  }

  setrollno(newrollno) {
    this.#rollno = newrollno;
  }

  setname(newname) {
    this.#name = newname;
  }

  setfees(newfees) {
    this.#fees = newfees;
  }

  payfees(amount) {
    if (this.#fees >= amount) {
      this.#fees = this.#fees - amount;
      console.log("fees paid remaining fees:", this.#fees);
    } else {
      console.log("Invalid amount");
    }
  }

  scholarship(amount) {
    this.#fees = this.#fees - amount;
    console.log("scholarship applied remaining fees:", this.#fees);
  }
}

let s = new student(101, "Ravi", 30000);

console.log("before");
console.log("roll no:", s.getrollno());
console.log("name:", s.getname());
console.log("fees:", s.getfees());

s.payfees(10000);
s.scholarship(5000);

console.log("final fees:", s.getfees());
