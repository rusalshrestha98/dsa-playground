// Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
  if (p1 === 'scissors' && p2 === 'paper') {
    return "Player 1 won!"
  } else if (p1 === "scissors" && p2 === 'rock') {
    return "Player 2 won!" 
  } else if (p1 === "rock" && p2 === 'paper') {
    return "Player 2 won!"
  } else if (p1 === "paper" && p2 === 'scissors') {
    return "Player 2 won!"
  } else if (p1 === "rock" && p2 === 'scissors') {
    return "Player 1 won!"
  } else if (p1 === "paper" && p2 === 'rock') {
    return "Player 1 won!"
  } else if (p1 === "scissors" && p2 === 'paper') {
    return "Player 1 won!"
  } else {
    if (p1 === p2) {
      return "Draw!"
    }
  }
};

// the better way to do it
// const rps = (p1, p2) => {
//   if (p1 === p2) return "Draw!";
//   var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   }
//   else {
//     return "Player 2 won!";
//   }
// };

console.log(rps('rock', 'scissors'));
console.log(rps('scissors', 'paper'));
console.log(rps('paper', 'rock'));