// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// 348597 => [7,9,5,8,4,3]

const digitize = (n) => {
    return n.toString().split('').reverse().map(d => {
        return parseInt(d);
    });
}

console.log(digitize(1234))