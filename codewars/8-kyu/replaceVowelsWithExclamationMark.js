// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// MY WORKING ATTEMPT
const replace = (str) => {
  // declare variables
  const vowels = 'aeiouAEIOU';
  let output = [];
  // processing
  str.split('').map((letter) => {
    if (vowels.includes(letter)) {
      output.push('!');
    } else {
      output.push(letter);
    }
  });
  // return output
  return output.join('');
};

// IMPROVED VERSION
// const replace = (str) => {
//   const vowels = 'aeiouAEIOU';
//   return str
//     .split('')
//     .map((letter) => (vowels.includes(letter) ? '!' : letter))
//     .join('');
// };

console.log(replace('Hi!'));
console.log(replace('!Hi! Hi!'));
