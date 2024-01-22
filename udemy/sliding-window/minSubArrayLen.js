// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
// If there isn't one, return 0 instead.

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

// Example usage:
const result1 = minSubArrayLen([2, 3, 1, 2, 4, 3], 7);
const result2 = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39);
const result3 = minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55);

console.log(result1); // Output: 2
console.log(result2); // Output: 3
console.log(result3); // Output: 5
