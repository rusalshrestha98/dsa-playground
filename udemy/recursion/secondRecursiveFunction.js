function sumRange(num) {
  if (num === 1) return 1; // base case: condition where recursion ends
  return num + sumRange(num - 1); // different input so we don't call it over and over
}

sumRange(4);
