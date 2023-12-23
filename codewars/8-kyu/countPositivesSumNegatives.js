// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
// 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

const countPositivesSumNegatives = (arr) => {
  // exceptions
  if (arr == null || arr.length == 0) return [];

  // input
  let countPositives = 0;
  let sumNegatives = 0;

  // processing
  arr.map((x) => {
    if (x > 0) {
      countPositives++;
    } else {
      sumNegatives = sumNegatives + x;
    }
  });

  // output
  return [countPositives, sumNegatives];
};

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(testData));

console.log(countPositivesSumNegatives([]));
