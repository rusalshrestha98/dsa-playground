// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

const findShort = (s) => {
  let arr = s.split(" ").map((x) => x.length);
  return Math.min(...arr);
};

console.log(findShort("Let's travel abroad shall we"));
