// Example 1 - Online Shopping

class Shopping {
  static websiteName = "Amazon";
  static deliveryTime = "3-5 Days";

  productDetails(
    productName,
    customerName,
    productPrice,
    quantity,
    paymentMode,
  ) {
    this.productName = productName;
    this.customerName = customerName;
    this.productPrice = productPrice;
    this.quantity = quantity;
    this.paymentMode = paymentMode;
  }

  display() {
    console.log("Website:", Shopping.websiteName);
    console.log("Delivery Time:", Shopping.deliveryTime);
    console.log("Product:", this.productName);
    console.log("Customer:", this.customerName);
    console.log("Price:", this.productPrice);
    console.log("Quantity:", this.quantity);
    console.log("Payment Mode:", this.paymentMode);
    console.log("-------------------------");
  }
}

let order1 = new Shopping();
order1.productDetails("Headphones", "Rahul", 1500, 1, "UPI");

let order2 = new Shopping();
order2.productDetails("Keyboard", "Kiran", 2000, 2, "Cash");

let order3 = new Shopping();
order3.productDetails("Mouse", "Arjun", 800, 1, "Card");

let order4 = new Shopping();
order4.productDetails("Monitor", "Vijay", 12000, 1, "UPI");

order1.display();
order2.display();
order3.display();
order4.display();

// Example 2 - Hospital Patient

class Hospital {
  static hospitalName = "Apollo Hospital";
  static emergencyNumber = 108;

  patientDetails(patientName, age, disease, doctorName, roomNumber) {
    this.patientName = patientName;
    this.age = age;
    this.disease = disease;
    this.doctorName = doctorName;
    this.roomNumber = roomNumber;
  }

  display() {
    console.log("Hospital:", Hospital.hospitalName);
    console.log("Emergency Number:", Hospital.emergencyNumber);
    console.log("Patient Name:", this.patientName);
    console.log("Age:", this.age);
    console.log("Disease:", this.disease);
    console.log("Doctor:", this.doctorName);
    console.log("Room Number:", this.roomNumber);
    console.log("-------------------------");
  }
}

let patient1 = new Hospital();
patient1.patientDetails("Ravi", 25, "Fever", "Dr. Kumar", 101);

let patient2 = new Hospital();
patient2.patientDetails("Suresh", 35, "Cold", "Dr. Priya", 102);

let patient3 = new Hospital();
patient3.patientDetails("Anil", 42, "Migraine", "Dr. Ramesh", 103);

let patient4 = new Hospital();
patient4.patientDetails("Manoj", 29, "Injury", "Dr. Sneha", 104);

patient1.display();
patient2.display();
patient3.display();
patient4.display();

// Example 3 - College Student

class College {
  static collegeName = "Raghu Institute of Technology";
  static courseName = "B.Tech";

  studentDetails(studentName, rollNumber, branch, year, percentage) {
    this.studentName = studentName;
    this.rollNumber = rollNumber;
    this.branch = branch;
    this.year = year;
    this.percentage = percentage;
  }

  display() {
    console.log("College:", College.collegeName);
    console.log("Course:", College.courseName);
    console.log("Student Name:", this.studentName);
    console.log("Roll Number:", this.rollNumber);
    console.log("Branch:", this.branch);
    console.log("Year:", this.year);
    console.log("Percentage:", this.percentage);
    console.log("-------------------------");
  }
}

let student1 = new College();
student1.studentDetails("Rahul", "101", "ECE", 4, 75);

let student2 = new College();
student2.studentDetails("Kiran", "102", "CSE", 3, 82);

let student3 = new College();
student3.studentDetails("Arjun", "103", "EEE", 2, 78);

let student4 = new College();
student4.studentDetails("Vijay", "104", "IT", 4, 85);

student1.display();
student2.display();
student3.display();
student4.display();
