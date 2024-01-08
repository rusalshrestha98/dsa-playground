// Write a function that takes a string and checks if it is a palindrome (reverse) or not

const isPalindrome = (str) => {
  if (!str.includes(",")) return str === str.split("").reverse().join("");

  let arrWords = str.split(",");
  for (let i = 0; i < arrWords.length; i++) {
    let reverseString = arrWords[i].split("").reverse().join("");
    if ((arrWords[i] = reverseString)) return true;
  }
};

console.log(isPalindrome("hello"));
console.log(isPalindrome("ara"));
console.log(isPalindrome("no lemon, no melon"));
