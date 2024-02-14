// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const validAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  // create the frequency counter using the first string
  let frequencyCounter = {};
  for (let val of s) {
    frequencyCounter[val]
      ? frequencyCounter[val]++
      : (frequencyCounter[val] = 1);
  }

  // now loop over second string
  for (let i = 0; i < t.length; i++) {
    // compare each letter to the frequency counter
    let letter = t[i];

    // if the frequency counter doesn't have the letter, return false
    if (!frequencyCounter[letter]) return false;
    // if the frequency counter has the letter, subtract 1 from the letter frequency
    else frequencyCounter[letter] -= 1;
  }

  return true;
};

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
