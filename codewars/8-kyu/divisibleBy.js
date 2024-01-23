// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor.
// First argument is an array of numbers and the second is the divisor.

const divisibleBy = (numbers, divisor) => {
  return numbers.filter((x) => x % divisor == 0);
};

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));
