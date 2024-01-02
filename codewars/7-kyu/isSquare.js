// Given an integral number, determine if it's a square number:

const isSquare = (n) => {
  return Math.sqrt(n, 2) % 1 === 0;
};

console.log(isSquare(25));
