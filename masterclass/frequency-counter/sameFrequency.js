// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)

const sameFrequency = (a, b) => {
  // check if params are same length
  if (a.toString().split("").length !== b.toString().split("").length) {
    return false;
  }

  // create freq counter for a
  let freqCount = {};
  let arrOfA = a.toString().split("");
  let arrOfB = b.toString().split("");

  for (let i = 0; i < arrOfA.length; i++) {
    let key = arrOfA[i];
    freqCount[key] ? freqCount[key]++ : (freqCount[key] = 1);
  }

  // compare freq of b in a
  for (let val of arrOfB) {
    if (!freqCount[val]) {
      return false;
    } else {
      freqCount[val]--;
    }
  }
  return true;
};

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
