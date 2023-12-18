// Build a function that returns an array of integers from n to 1 where n>0

const reverseSeq = n => {
    let result = [];
    while (n >= 1) {
        result.push(n);
        n -=1;
    }
    return result;
}

console.log(reverseSeq(5))