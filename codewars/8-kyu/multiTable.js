// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
// P. S. You can use \n in string to jump to the next line.
// Note: newlines should be added between rows, but there should be no trailing newline at the end.

const multiTable = (num) => {
  let result = [];
  for (let i = 1; i <= 10; i++) {
    result.push(`${i} * ${num} = ${i * num}`);
  }
  return result.join('\n');
};
console.log(multiTable(5));
