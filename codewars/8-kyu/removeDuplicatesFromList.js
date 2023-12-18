// Define a function that removes duplicates from an array of numbers & returns it as a result.

const distinct = (a) => {
    return Array.from(new Set(a));
}

console.log(distinct([1]));
console.log(distinct([1, 2]));
console.log(distinct([1, 1, 2]));