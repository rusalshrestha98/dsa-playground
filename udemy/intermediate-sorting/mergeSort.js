// MERGING 2 SORTED ARRAYS
// Create an empty array, take a look at the smallest values in each input array
// While there are still values we haven't looked at...
    // If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    // If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    // Once we exhaust one array, push in all remaining values from the other array
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  // compare each element of arr1 to arr2
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // push any remaining elements into results array
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}
console.log(merge([100, 200], [1, 2, 3, 5, 6]));

// RECURSIVE MERGE SORT
// Break up the array into halves until you have arrays that are empty or have one element
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// Once the array has been merged back together, return the merged (and sorted!) array
function mergeSort(arr) {
  if (arr.length <= 1) return arr; // base case
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
