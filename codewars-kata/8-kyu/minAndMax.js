// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending
// on the language ) that receive a list of integers as input, and return the largest and lowest
// number in that list, respectively.

const min = (list) => {
  return list.sort((a,b) => a - b).shift();

  // another way
  // return Math.min(...list)
};

const max = (list) => {
  return list.sort((a,b) => a - b).pop();

  // another way
  // return Math.max(...list)
}

console.log(min([4,6,2,1,9,63,-134,566]));
console.log(max([4,6,2,1,9,63,-134,566]));
console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));