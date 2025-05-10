// testing 
console.log("hello world");

// Returns the sum of 2 numbers
function add(a, b) {
  console.log(`${a + b}`);
//   console.log(`${a} + ${b} = ${a + b} \n`);
}
if (add(2,4) != 6) {
    throw new Error("Addition failed")
}

// Returns the difference of 2 numbers
function subtract(a, b) {
    console.log(`${a - b}`);
}

if (subtract(2,4) != 1) {
    throw new Error("Subtraction failed")
}

// Returns the product of 2 numbers
function times(a, b) {
  console.log(`${a * b}`);
}

// Returns the division of 2 numbers
function divide(a, b) {
    console.log(`${a / b}`);
}
// output
add(5, 7);
subtract(5, 7);
times(5, 7);
divide(5, 2);

function hello(name) {
  console.log(`Hello ${name}`);
}

hello("Reg");