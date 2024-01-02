// Create a method to see whether the string is ALL CAPS.

// const isAllCaps = (s) => {
//   let allCaps = true;
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   alphabet.split("").map((x) => {
//     if (s.includes(x)) allCaps = false;
//   });
//   return allCaps;
// };

const isAllCaps = (s) => {
  return s.toUpperCase() === s.toString();
};

console.log(isAllCaps("HELLOW I AM RUSAL"));
console.log(isAllCaps("HELLOW I AM RUSAl"));
