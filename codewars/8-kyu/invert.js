// Given a set of numbers, return the additive inverse of each.
// Each positive becomes negatives, and the negatives become positives.

const invert = (arr) => {
  return arr.length === 0 ? [] : arr.map((x) => x * -1);
};
