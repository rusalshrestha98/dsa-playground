// Very simple, given a number, find its opposite.

const opposite = (number) => {
    return (number >= 0 ? -number : Math.abs(number));
}

// const opposite = (number) => {
//     return -number;
// }

console.log(opposite(-5));