// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

const moveZeros = (arr) => {
  let noZeroArr = arr.filter((x) => x !== 0);
  let zeroArr = arr.filter((x) => x === 0);
  return noZeroArr.concat(zeroArr);
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
