// Complete the function so that it finds the average of the three scores passed to it
// and returns the letter value associated with that grade.

const getGrade = (a, b, c) => {
  const average = (a + b + c) / 3;

  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
};
