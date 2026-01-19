// n and m should be natural numbers (positive integers).
// Otherwise, see the examples in your language about how to handle invalid input values.
// m is excluded from the multiples

const sumMul = (n, m) => {
  if (n <= 0 || m <= 0) return 'INVALID';

  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }

  return sum;
};

console.log(sumMul(2,9))