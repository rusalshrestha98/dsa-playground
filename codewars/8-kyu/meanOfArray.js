// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

const getAverage = (marks) => {
    // sum the elements of the array
    let sumOfArray = 0;
    for (let i = 0; i < marks.length; i++) {
        sumOfArray += marks[i];
    }
    // divide the sum by the array length and return average
    return Math.floor(sumOfArray/marks.length);
}

console.log(getAverage([2,2,2,2]))