// Example 1 - Bike Showroom
class BikeShowroom {
  static showroomName = "Royal Enfield Showroom";
  static location = "Hyderabad";
  constructor(bikeName, customerName, price, color, model, year) {
    this.bikeName = bikeName;
    this.customerName = customerName;
    this.price = price;
    this.color = color;
    this.model = model;
    this.year = year;
  }
  displayDetails() {
    console.log("==============================");
    console.log("Showroom:", BikeShowroom.showroomName);
    console.log("Location:", BikeShowroom.location);
    console.log("Bike Name:", this.bikeName);
    console.log("Customer Name:", this.customerName);
    console.log("Price:", this.price);
    console.log("Color:", this.color);
    console.log("Model:", this.model);
    console.log("Year:", this.year);
  }
}
let bike1 = new BikeShowroom(
  "Classic 350",
  "Rahul",
  220000,
  "Black",
  "Standard",
  2025,
);
let bike2 = new BikeShowroom(
  "Hunter 350",
  "Kiran",
  180000,
  "Red",
  "Metro",
  2025,
);
let bike3 = new BikeShowroom(
  "Bullet 350",
  "Arjun",
  200000,
  "Black",
  "Base",
  2024,
);
bike1.displayDetails();
bike2.displayDetails();
bike3.displayDetails();

// Example 2 - Hotel Room Booking
class HotelBooking {
  static hotelName = "Taj Hotel";
  static hotelLocation = "Bangalore";
  constructor(customerName, roomNumber, roomType, days, price, foodType) {
    this.customerName = customerName;
    this.roomNumber = roomNumber;
    this.roomType = roomType;
    this.days = days;
    this.price = price;
    this.foodType = foodType;
  }
  displayBooking() {
    console.log("==============================");
    console.log("Hotel Name:", HotelBooking.hotelName);
    console.log("Location:", HotelBooking.hotelLocation);
    console.log("Customer:", this.customerName);
    console.log("Room Number:", this.roomNumber);
    console.log("Room Type:", this.roomType);
    console.log("Days:", this.days);
    console.log("Price:", this.price);
    console.log("Food Type:", this.foodType);
  }
}
let booking1 = new HotelBooking("Ravi", 101, "Deluxe", 2, 5000, "Veg");
let booking2 = new HotelBooking("Suresh", 202, "Luxury", 3, 9000, "Non-Veg");
let booking3 = new HotelBooking("Manoj", 303, "Standard", 1, 2500, "Veg");
booking1.displayBooking();
booking2.displayBooking();
booking3.displayBooking();

// Example 3 - Employee Details
class CompanyEmployee {
  static companyName = "Tech Solutions";
  static companyBranch = "Hyderabad";
  constructor(
    employeeName,
    employeeId,
    department,
    salary,
    experience,
    designation,
  ) {
    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.department = department;
    this.salary = salary;
    this.experience = experience;
    this.designation = designation;
  }
  displayEmployee() {
    console.log("==============================");
    console.log("Company:", CompanyEmployee.companyName);
    console.log("Branch:", CompanyEmployee.companyBranch);
    console.log("Employee Name:", this.employeeName);
    console.log("Employee ID:", this.employeeId);
    console.log("Department:", this.department);
    console.log("Salary:", this.salary);
    console.log("Experience:", this.experience);
    console.log("Designation:", this.designation);
  }
}
let employee1 = new CompanyEmployee(
  "Rahul",
  101,
  "IT",
  35000,
  "1 Year",
  "Developer",
);
let employee2 = new CompanyEmployee(
  "Kiran",
  102,
  "HR",
  30000,
  "2 Years",
  "HR Executive",
);
let employee3 = new CompanyEmployee(
  "Arjun",
  103,
  "Testing",
  40000,
  "3 Years",
  "Tester",
);
employee1.displayEmployee();
employee2.displayEmployee();
employee3.displayEmployee();
