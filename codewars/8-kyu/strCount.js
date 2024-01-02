// Create a function that accepts a string and a single character,
// and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

const strCount = (str, letter) => {
  let count = 0;
  str.split("").map((x) => {
    if (x === letter) count++;
  });
  return count;
};

// CLEVER
// function strCount(str, letter) {
//   return str.split(letter).length - 1;
// }
