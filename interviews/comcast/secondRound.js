// Given two arrays of strings, determin whether corresponding elements contain a common substring

// Example
// a = ['ab', 'cd', 'ef']
// b = ['af', 'ee', 'ef']

// For each test, print the result on a new line, either YES if there is a common substring, or NO

function commonSubstring(a, b) {
  let result = [];
  // loop through arrays
  for (let i = 0; i <= a.length; i++) {
    let elementOfA = a[i]; // abcde.includes(abc)
    let elementOfB = b[i]; // b

    let tempSubstring = []; // ["a", "ab", "abc"]
    for (let i = 0; i <= elementOfB.length; i++) {
      // how to push each unique substring to tempSubstring
      tempSubstring.push(elementOfB[i]);
    }

    tempSubstring.map((x) => {
      if (elementOfA.includes(x)) {
        result.push('YES');
      } else {
        result.push('NO');
      }
    });
  }

  return result.join('\n');
}
