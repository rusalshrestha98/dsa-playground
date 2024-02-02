// Given a list of unique numbers sorted in ascending order, return a new list so that the values
// increment by 1 for each index from the minimum value up to the maximum value (both included).

const pipeFix = (numbers) => {
  let result = [];
  let start = numbers[0];
  let end = numbers[numbers.length - 1];

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  return result;
};

console.log(pipeFix([1, 3, 5, 6, 7, 8]));
