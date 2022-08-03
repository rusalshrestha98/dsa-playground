// This function takes two numbers as parameters, the first number being the coefficient, 
// and the second number being the exponent.

// Your function should multiply the two numbers, and then subtract 1 from the exponent. 
// Then, it has to print out an expression (like 28x^7). "^1" should not be truncated when exponent = 2.

const derive = (coefficient, exponent) => {
  return `${coefficient*exponent}x^${exponent-1}`
}

console.log(derive(7,8));
console.log(derive(5,9));
console.log(derive(9,2));