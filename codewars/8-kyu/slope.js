// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.
// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

const slope = (points) => {
  const [a, b, c, d] = points;
  const x = c - a;
  const y = d - b;
  if (x === 0) return "undefined";
  else return String(y / x);
};

console.log(slope([19, 3, 20, 3]));
console.log(slope([2, 7, 4, -7]));