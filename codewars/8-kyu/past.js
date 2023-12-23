// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

const past = (h, m, s) => {
  const hours = h * 60 * 60 * 1000;
  const minutes = m * 60 * 1000;
  const seconds = s * 1000;
  return hours + minutes + seconds;
};

console.log(past(0, 1, 1));
console.log(past(1, 1, 1));
