// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

const getSize = (width, height, depth) => {
  const surfaceArea = 2 * (width * height + height * depth + width * depth);
  const volume = width * height * depth;
  return [surfaceArea, volume];
};

console.log(getSize(4, 2, 6));
