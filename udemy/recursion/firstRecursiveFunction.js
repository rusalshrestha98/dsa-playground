// Iterative Version
function countDown(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}

// Recursive Version
function countDown(num) {
  // base case: condition where recursion ends
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  // different input so we don't call it over and over
  num--;
  countDown(num);
}
countDown(3);
