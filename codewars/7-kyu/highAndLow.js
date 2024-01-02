// In this little assignment you are given a string of space separated numbers,
// and have to return the highest and lowest number.

// without using the Math.max() and Math.min() functions
// const highAndLow = (str) => {
//   let arrOfNums = str
//     .split(" ")
//     .map((x) => Number(x))
//     .sort((a, b) => a - b);

//   let highest = arrOfNums[arrOfNums.length - 1];
//   let lowest = arrOfNums[0];
//   return [highest, lowest].join(" ");
// };

const highAndLow = (numbers) => {
  numbers = numbers.split(" ").map(Number);
  
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return `${max} ${min}`;
};

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
