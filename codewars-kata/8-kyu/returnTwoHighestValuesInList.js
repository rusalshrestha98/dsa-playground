// In this kata, your job is to return the two distinct highest values in a list. 
// If there're less than 2 unique values, return as many of them, as possible.
// The result should also be ordered from highest to lowest.

const twoHighest = (arr) => {
    let result = [];
    if (arr.length == 0) {
        return arr;
    } else if (arr.length == 1) {
        return arr;
    } else {
        const sortedArr = arr.sort(function (a, b) {  return a - b;  }).reverse();
        result.push(sortedArr[0]);
        for (let i = 1; i < sortedArr.length; i++) {
            if (sortedArr[0] !== sortedArr[i] && result.length < 2) {
                result.push(sortedArr[i]);
            }
        }
    }
    return result;
}

console.log(twoHighest([]));
console.log(twoHighest([15]));
console.log(twoHighest([15, 20, 20, 17]));
let a = [28716,37061,80993,51718,72343,71377,92233,30077,29511,31059,10533,82043,97684,963,65755,64548,82796,64987];
console.log(twoHighest(a));
