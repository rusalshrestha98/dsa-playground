// Write a function that accepts a string and returns an object. 
// The object has a key for every character that exists at least once in the string.
// The value for each key is how many times that character exists in the string.

const characterCount = (str) => {
    str.toLowerCase();
    let result = {};
    for (let i = 0; i < str.length; i++) {
        // if object does have the character as a key value
        if (result.hasOwnProperty(str[i]) == true) {
            // increment the value of that key
            result[str[i]] += 1;
        } else if (result.hasOwnProperty(str[i]) == false) {
            // add the key AND value to the object
            result[str[i]] = 1;
        } else {
            // do nothing if the character is not valid
            return;
        }
    }
    return result;
}

console.log(characterCount('Rusal'));
console.log(characterCount('Daffadillis'));