// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. 
// If the value does not exist in the array, return -1.
// Don't use indexOf to implement this function!

function linearSearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  let result = -1;
  arr.map((el, i) => {
    if (el === val) result = i;
  });
  return result;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));
console.log(linearSearch([10, 15, 20, 25, 30], 100));
