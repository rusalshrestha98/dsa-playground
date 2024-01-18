// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

const gooseFilter = (birds) => {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((bird) => {
    return !geese.includes(bird);
  });
};

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);
console.log(
  gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"])
);
