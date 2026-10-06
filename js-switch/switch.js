//shapes
function shapes() {
  let n = parseInt(document.getElementById("sides").value);
  switch (n) {
    case 1:
      document.getElementById("res").value = "enter valid number";
      break;
    case 2:
      document.getElementById("res").value = "enter valid number";
      break;
    case 3:
      document.getElementById("res").value = "Triangle";
      break;
    case 4:
      document.getElementById("res").value = "quadrilateral";
      break;
    case 5:
      document.getElementById("res").value = "pentagon";
      break;
    case 6:
      document.getElementById("res").value = "Hexagon";
      break;
    case 7:
      document.getElementById("res").value = "sepatagon";
      break;
    case 8:
      document.getElementById("res").value = "octagon";
      break;
    case 9:
      document.getElementById("res").value = "nonagon";
      break;
    case 10:
      document.getElementById("res").value = "decagon";
      break;
    default:
      document.getElementById("res").value = "Enter number below 10";
  }
  return false;
}

//2 question
function operations() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let oper = document.getElementById("oper").value;
  switch (oper) {
    case "+":
      document.getElementById("resu").value = num1 + num2;
      break;
    case "-":
      document.getElementById("resu").value = num1 - num2;
      break;
    case "*":
      document.getElementById("resu").value = num1 * num2;
      break;
    case "/":
      document.getElementById("resu").value = num1 / num2;
      break;
    case "%":
      document.getElementById("resu").value = num1 % num2;
      break;
  }
  return false;
}
