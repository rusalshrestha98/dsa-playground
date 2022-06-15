// Complete the function that takes a non-negative integer n as input, and returns a list of 
// all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

const powersOfTwo = (n) => {
  let result = [];
  for (let i = 0; i <= n; i++) {
    result.push(i+n)
  }
  return result;
}

console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));