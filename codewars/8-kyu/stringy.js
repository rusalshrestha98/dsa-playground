// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
// the string should start with a 1.
// The size will always be positive and will only use whole numbers.

const stringy = (size) => {
  let result = "1";
  for (let i = 0; i < size - 1; i++) {
    if (i % 2 == 0) {
      result += "0";
    } else {
      result += "1";
    }
  }
  return result;
};

console.log(stringy(6));
