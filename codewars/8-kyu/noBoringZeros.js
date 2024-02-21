// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.

const noBoringZeros = (num) => {
  let arr = num.toString().split('');
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === '0') {
      arr.pop();
    } else {
      break;
    }
  }
  return Number(arr.join(''));
};

console.log(noBoringZeros(1450));
