// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// const countUniqueValues = (arr) => {
//   return Array.from(new Set(arr)).length;
// };

const countUniqueValues = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    let sub = arr[i + 1];

    if (curr !== sub) result.push(curr);
  }

  return result.length;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
