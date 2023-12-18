// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

const abbrevName = (name) => {
    let abbr = name[0] + "." + name[name.split('').indexOf(' ') + 1];
    return abbr.toUpperCase();
}

console.log(abbrevName("rusal shrestha"))