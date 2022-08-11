// Write a function to split a string and convert it into an array of words.
// "Robin Singh" ==> ["Robin", "Singh"]

const stringToArray = (string) => {
  return string.split(" ");
}

console.log(stringToArray("Robin Singh"))