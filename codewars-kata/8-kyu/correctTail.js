// function correctTail(bod, tail ;
  
//   sub = body.substr(bodylength-(tail.length)
  
//   if sub = tail) ;
//     return true
//   }
//   else 
//     return false

const correctTail = (bod, tail) => {
  // sub = bod.split('').pop();
  // if (sub == tail) {
  //   return true;
  // } else {
  //   return false;
  // }
  // return bod[bod.length-1] === tail;
  return bod.endsWith(tail);
}

console.log(correctTail("Fox", "x"));