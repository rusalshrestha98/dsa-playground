// What is a factorial again?
// 4! = 4 * 3 * 2 * 1;

// Iterative Version
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// Recursive Version
function factorial(num) {
  if (num === 1) return 1; // base case: condition where recursion ends
  return num * factorial(num - 1); // different input so we don't call it over and over
}
