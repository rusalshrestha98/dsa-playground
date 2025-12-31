// When provided with a letter, return its position in the alphabet.
// Input :: "a"
// Output :: "Position of alphabet: 1"
// Note: Only lowercased English letters are tested

const position = (letter) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return `Position of alphabet: ${alphabet.split('').indexOf(letter) + 1}`;
};

console.log(position('z'));
