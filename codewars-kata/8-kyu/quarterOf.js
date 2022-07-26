// Given a month as an integer from 1 to 12, return to which quarter 
// of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), 
// is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month) => {
  // switch(month) {
  //   case 1:
  //     return 1;
  //   case 2:
  //     return 1;
  //   case 3:
  //     return 1;
  //   case 4:
  //     return 2;
  //   case 5:
  //     return 2;
  //   case 6:
  //     return 2;
  //   case 7:
  //     return 3;
  //   case 8:
  //     return 3;
  //   case 9:
  //     return 3;
  //   case 10:
  //     return 4;
  //   case 11:
  //     return 4;
  //   case 12:
  //     return 4;
  // }

  // if (month <= 3) {
  //   return 1
  // } else if (month <= 6) {
  //   return 2
  // } else if (month <= 9) {
  //   return 3
  // } else if (month <= 12) {
  //   return 4
  // }

  return Math.ceil(month/3);
}

// const quarterOf = (month, quarter = 4) => {
//   switch (month) {
//     case 1:
//     case 2:
//     case 3:
//       quarter = 1;
//       break;
//     case 4:
//     case 5:
//     case 6:
//       quarter = 2;
//       break;
//     case 7:
//     case 8:
//     case 9:
//       quarter = 3;
//       break;
//   }
//   return quarter;
// };

console.log(quarterOf(3));
console.log(quarterOf(8));
console.log(quarterOf(11));