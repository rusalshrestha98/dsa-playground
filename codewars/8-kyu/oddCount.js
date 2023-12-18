// Given a number n, return the number of positive odd numbers below n, EASY!

const oddCount = (n) => {
  // let count = 0;
  // for (let i = 0; i < n; i++) {
  //   if (i % 2 !== 0) {
  //     count++;
  //   };
  // };
  // return count;
  return Math.floor(n/2);
}

console.log(oddCount(7));
console.log(oddCount(15));