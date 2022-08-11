// Take an array and remove every second element from the array. 
// Always keep the first element and start removing with the next element.
// None of the arrays will be empty, so you don't have to worry about that!

const removeEveryOther = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      result.push(arr[i]);
    };
  };
  return result;
}

// console.log(removeEveryOther([1,2,3,4,5,6,7,8,9,10]));
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
