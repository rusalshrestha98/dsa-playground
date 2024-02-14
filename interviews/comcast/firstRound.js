/*
 * Complete the 'maxSubstring' function below.
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function maxSubstring(s) {
  // get all unique substrings in the string and push into array
  let uniqueSubstringArr = [];
  // process and push if it meets criteria - how to determine new substring
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s.length; j++) {
      // grab the letter(s)
      let substr = s.slice(i, j);
      // console.log(substr)

      // check if it exists in the uniqueSubstringArr
      if (!uniqueSubstringArr.includes(substr)) {
        // if it doesn't exist, push it in
        uniqueSubstringArr.push(substr);
      }
    }
  }

  // sort the unique substring alphabetically

  // grab the last index of the array and return
  return uniqueSubstringArr[-1];
}
