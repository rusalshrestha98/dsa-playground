// Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number.

// Division by zero should return NaN.

const remainder = (a,b) => {
    return Math.max(a,b) % Math.min(a,b);
}

console.log(remainder(17,5));
console.log(remainder(13,72));
console.log(remainder(1,0));
console.log(remainder(0,0));