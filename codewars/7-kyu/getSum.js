// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it.
// If the two numbers are equal return a or b.
// Note: a and b are not ordered!

const getSum = (a, b) => {
  if (a === b) return a;

  let first = Math.min(a, b);
  let second = Math.max(a, b);
  let sum = 0;

  for (let i = first; i <= second; i++) {
    sum += i;
    console.log(i);
  }
  return sum;
};

console.log(getSum(0, -1));
console.log(getSum(0, 1));
console.log(getSum(2, 2));
