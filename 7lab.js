// testing Using the functions you created for Exercise 4: 
// Write a specification comment for each function 
// Write at least 3 unit tests for each function 
// In the unit tests, try to include both expected and non-typical test values 
// (such as zero, decimal or negative numbers)

// This function returns the sum of 2 numbers
function add(a, b) {
  console.log(`${a + b}`);
  return a + b;
//   console.log(`${a} + ${b} = ${a + b} \n`);
}

// Test units
try {
  if (add(2, 4) != 6) {
    throw new Error('Addition failed');
  }
  if (add(-2, -4) != -6) {
    throw new Error('Addition failed for negative number');
  }
}
catch(error) {
  console.error(error);
}
try {
  add(cats, dogs);
}
catch (e) {
  if (!(e instanceof Error)) {
    throw new Error('Expected reference error');
  }
}


// Returns the difference of 2 numbers
function subtract(a, b) {
    console.log(`${a - b}`);
    return a - b;
}
// Unit tests
try {
  if (subtract(3, 0.4) != 2.6) {
    throw new Error('subtraction failed for decimal numbers');
  }
  if (subtract(-2, -2) != 0) {
    throw new Error("subtraction failed for negative numbers");
  }
  if (subtract(3/4, 1/2) != 1/4) {
    throw new Error("subtraction failed for fractional numbers");
  }
}
catch(error) {
  console.error(error);
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