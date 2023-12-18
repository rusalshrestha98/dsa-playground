// Given a non-negative integer, 3 for example, return a string with a murmur: 
// "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    result.push(i.toString() + " sheep...");
  }
  return result.join('');
}

console.log(countSheep(3));
console.log(countSheep(1));

