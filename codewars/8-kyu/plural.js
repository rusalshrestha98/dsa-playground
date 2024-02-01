// We need a simple function that determines if a plural is needed or not. It should take a number,
// and return true if a plural should be used with that number or false if not.
// This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
// All values will be positive integers or floats, or zero.

const plural = (n) => {
  return n === 1 ? false : true;
};
