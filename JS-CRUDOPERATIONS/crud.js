// Create an object

let mobile = {
  "Mobile name": "Samsung",
  mobile_price: 45000,
  RAM: 8,
};

// Retrieve data

console.log(mobile["Mobile name"]);
console.log(mobile["mobile_price"]);
console.log(mobile["RAM"]);

// Update the data

mobile["mobile_price"] = 50000;
console.log(mobile["mobile_price"]);

// Add new properties

mobile["storage"] = "128GB";
console.log(mobile);

// Delete the data

delete mobile["RAM"];
console.log(mobile);
