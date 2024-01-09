// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// o(log n) - best solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

// o(n) solution - next best solution
const areThereDuplicates = (...args) => {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  //   // for loop doesn't work for this
  //   for (let i = 1; i < args.length; i++) {
  //     let curr = arguments[i];
  //     let sub = arguments[i + 1];
  //     if (curr === sub) {
  //       return true;
  //     }
  //   }

  // use while loop
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }

  return false;
};

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
