// Remove an exclamation mark from the end of a string. 
// For a beginner kata, you can assume that the input data is always a string, no need to verify it.

const remove = (str) => {
  return str[str.length - 1] == '!' ? str.slice(0, -1) : str;
};

// function remove(s) {
//   return s.endsWith('!') ? s.slice(0, -1) : s;
// }

console.log(remove('Hi!'));
