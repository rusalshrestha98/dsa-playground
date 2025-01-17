// Find the mean (average) of a list of numbers in an array.

const findAverage = (nums) => {
  let sum = 0;
  nums.map((x) => (sum += x));
  return sum / nums.length;
};
