// You are given two sorted arrays that both only contain integers. Your task is to find a way to 
// merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), 
// where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers.
// If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. 
// Remove duplicated in the returned result.


const mergeArrays = (arr1, arr2) => {
  // if both arrays are empty
  if (arr1.length ==0 && arr2.length == 0) {
    return [];
  }
  // concat and sort
  let arr3 = arr1.concat(arr2).sort((a, b) => a - b);
  // remove duplicates
  
}

console.log(mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]));
console.log(mergeArrays([1, 3, 5, 7, 9], [100, 8, 6, 4, 2]));
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));