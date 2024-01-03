// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language;
// see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase.
// For example:
// "hello world".toAlternatingCase() === "HELLO WORLD"

const alternatingCase = (string) => {
  return string
    .split("")
    .map((x) => {
      if (x === x.toUpperCase()) {
        return x.toLowerCase();
      } else {
        return x.toUpperCase();
      }
    })
    .join("");
};

console.log(alternatingCase("hello WORLD"));
