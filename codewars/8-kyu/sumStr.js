// Create a function that takes 2 integers in form of a string as an input,
// and outputs the sum (also as a string):

const sumStr = (a, b) => {
  if (a === "" && b === "") return "0";
  return (Number(a) + Number(b)).toString();
};

// function sumStr(a, b) {
//   return String(Number(a) + Number(b));
// }

console.log(sumStr("0", "2"));
