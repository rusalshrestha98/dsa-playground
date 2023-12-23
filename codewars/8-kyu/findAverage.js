// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

const findAverage = (arr) => {
  let sum = 0;
  arr.map((x) => {
    sum += x;
  });
  return arr.length === 0 ? 0 : sum / arr.length;
};

console.log(findAverage([1, 1, 1]));
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4]));
