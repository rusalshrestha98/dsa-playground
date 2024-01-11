// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

const shortcut = (str) => {
  let result = [];
  let vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (!vowels.includes(char)) result.push(char);
  }
  return result.join("");
};

// function shortcut(string) {
//   return string
//     .split("")
//     .filter((str) => !"aeiou".includes(str))
//     .join("");
// }

console.log(shortcut("Rusal"));
