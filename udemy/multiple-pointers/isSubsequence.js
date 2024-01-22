// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

const isSubsequence = (str1, str2) => {
  let i = 0; // Pointer for str1
  let j = 0; // Pointer for str2
  if (!str1) return true; // if str1 is empty

  while (j < str2.length) {
    // If the current characters match, move the pointer for str1
    if (str1[i] === str2[j]) {
      i++;
    }
    // If all characters in substring are found in order, return true
    if (i === str1.length) {
      return true;
    }
    // Move the pointer for str2 in any case
    j++;
  }

  // If we reach the end of str2 and haven't found all characters from str1, return false
  return false;
};

console.log(isSubsequence("hello", "hello word"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
