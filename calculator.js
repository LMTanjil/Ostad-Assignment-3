let num_1 = 10;
let num_2 = 5;

const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};  

const multiply = function(a, b) {
  return a * b;
}

const divide = function(a, b) {
  if (b === 0) {
    return "Error: Division by zero is not allowed.";
  }
  return a / b;
}

const modulus = function(a, b) {
  if (b === 0) {
    return "Error: Modulus by zero is not allowed.";
  }
  return a % b;
}

console.log("Addition:", add(num_1, num_2)); // 15
console.log("Subtraction:", subtract(num_1, num_2)); // 5
console.log("Multiplication:", multiply(num_1, num_2)); // 50
console.log("Division:", divide(num_1, num_2));
console.log("Modulus:", modulus(num_1, num_2));

