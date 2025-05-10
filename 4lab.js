console.log("hello world");

// calculator
function add(a, b) {
    console.log("a: " + a);
    console.log("b: " + b);
    c = a + b;
    console.log(`${a} + ${b} = ${a + b} \n`);

    // let message = `${a} + ${b} = ${a + b} \n`;
    
}

function subtract(a, b) {
    console.log("a: " + a);
    console.log("b: " + b);
    console.log("a - b = " + (a - b) + "\n");
}

function times(a, b) {
    console.log("a: " + a);
    console.log("b: " + b);
    c = a * b;
    console.log("a x b = " + c + "\n");
}

function divide(a, b) {
    console.log("a: " + a);
    console.log("b: " + b);
    c = a / b;
    console.log("a / b = " + c + "\n");
}
// output
add(5,7);
subtract(5,7);
times(5,7);
divide(5,7);

function hello(name) {
    console.log(`Hello ${name}`);
}

hello('Reg');