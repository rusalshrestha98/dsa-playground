// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

const removeExclamationMarks = (s) => {
  return s
    .split("")
    .filter((x) => x !== "!")
    .join("");

  // better solutions
  //   return s.split('!').join('');
  //   return s.replaceAll('!', '');
};

console.log(removeExclamationMarks("Hello!!"));
