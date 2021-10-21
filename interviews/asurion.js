// Your goal is to write a function called transform. 
// This function takes, as an input, an array of integers of at least length 1. 
// You need to return a new array where each element equals to the product of itself with all of the subsequent elements.


function transform(arr) {
    // declaring variables
    let resultArr = [];
    
    // processing: loop through the input array and multiply each element by the subsequent elements
    for (let i = 0; i < arr.length; i++) {
      // check if it is the last index
      if (arr[i] == arr[-1]) { // if yes, don't grab subsequent elements
        return;
      } else { // if no, multiple all subsequent elements with current index and push into result array
        let currElement = arr[i]; // set current element
        const subElements = arr.slice(i + 1); // grab subsequent elements
        subElements.map((d) => { // multiply curreent element with subsequent elements
          currElement = currElement * d;
        })
        resultArr.push(currElement) // push current element into results array
      }
    }
    
    // return output that is an array
    return resultArr;
  }
  
  console.log(transform([3, 2, 2, 4, 5]))