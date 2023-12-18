// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. 
// P.S. Each array includes only integer numbers. Output is a number too.

const arrayPlusArray = (arr1, arr2) => {
    let sum = 0;
    arr1.concat(arr2).map(d => sum += d)
    return sum;
}

// const arrayPlusArray = (arr1, arr2) => {
//     let arr = [...arr1, ...arr2];
//     return arr.reduce((a, b) => a + b);
// }

// function arrayPlusArray(arr1, arr2) {
//     return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// }

console.log(arrayPlusArray([1,2,3], [4,5,6]))