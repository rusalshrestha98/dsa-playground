// Create a function that returns the total of a meal including tip and tax.
// You should not tip on the tax.
// You will be given the subtotal, the tax as a percentage and the tip as a percentage.
// Please round your result to two decimal places.

const calculate_total = (
  subtotal: number,
  tax: number,
  tip: number
): number => {
  const total = subtotal * (1 + tax / 100 + tip / 100);

  return Number(total.toFixed(2));
};

console.log(calculate_total(5, 5, 10));
console.log(calculate_total(36.97, 7, 15));
