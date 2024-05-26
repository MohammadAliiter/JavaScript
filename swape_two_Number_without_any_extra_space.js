let a = 5;
let b = 10;

console.log(`Before swap: a = ${a}, b = ${b}`);

// Swapping without extra space using arithmetic operations
a = a + b;  // a now becomes 15 (5 + 10)
b = a - b;  // b now becomes 5 (15 - 10)
a = a - b;  // a now becomes 10 (15 - 5)

console.log(`After swap: a = ${a}, b = ${b}`);
