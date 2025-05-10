// array of 5 elements
let animals = ['dog', 'cat', 'rabbit', 'mouse', 'kangaroo'];
// press F5 to debug

// replace 1st and 4th positions
animals[0] = 'wombat';
animals[4] = 'pig';
// [ 'wombat', 'cat', 'rabbit', 'mouse', 'pig' ]

// add a new element to the beginning of the array
animals.unshift('cow');
// [ 'cow', 'wombat', 'cat', 'rabbit', 'mouse', 'pig' ]

// remove the element at the end of the array
animals.pop();
// [ 'cow', 'wombat', 'cat', 'rabbit', 'mouse' ]

// final array
console.log(animals);