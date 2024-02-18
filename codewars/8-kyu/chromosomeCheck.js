// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter.";
// If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

const chromosomeCheck = (sperm) => {
  return sperm.includes('Y')
    ? "Congratulations! You're going to have a son."
    : "Congratulations! You're going to have a daughter.";
};

console.log(chromosomeCheck('XY'));
console.log(chromosomeCheck('XX'));
