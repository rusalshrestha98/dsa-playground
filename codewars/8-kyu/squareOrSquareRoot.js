// Write a method, that will get an integer array as parameter and will process every number from this array.
// If the number has an integer square root, take this, otherwise square the number.
// Example: [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Note: The input array will always contain only positive numbers, and will never be empty or null.

const squareOrSquareRoot = (array) => {
  return array.map((num) => {
    // if there is no remainder => has square root => square root the number
    if (Math.sqrt(num) % 1 === 0) return Math.sqrt(num);
    // if there is a remainder => has no square root => square the number
    else return Math.pow(num, 2);
  });
};

// function squareOrSquareRoot(array) {
//   return array.map((e) => (Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e * e));
// }

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
