//new lesson
//first
const rps = (p1, p2) => {
  let scissors = "scissors"
  let paper = "paper"
  let rock = "rock"
  if (p1 === scissors && p2 === scissors) return "Draw!"
  if (p1 === paper && p2 === paper) return "Draw!"
  if (p1 === rock && p2 === rock) return "Draw!"
  if (p1 === scissors && p2 === paper) return "Player 1 won!"
  if (p1 === paper && p2 === scissors) return "Player 2 won!"
  if (p1 === paper && p2 === rock) return "Player 1 won!"
  if (p1 === rock && p2 === paper) return "Player 2 won!"
  if (p1 === rock && p2 === scissors) return "Player 1 won!"
  if (p1 === scissors && p2 === rock) return "Player 2 won!"
}

//good solution
function rps(p1, p2) {
  if (p1 === p2) return "Draw!"
  const rules = { rock: "scissors", paper: "rock", scissors: "paper" }
  if (p2 === rules[p1]) {
    return "Player 1 won!"
  } else {
    return "Player 2 won!"
  }
}

//if/else
const rps = (p1, p2) => {
  if (p1 == p2) return "Draw!"
  if (p1 == "rock" && p2 == "scissors") return "Player 1 won!"
  else if (p1 == "scissors" && p2 == "paper") return "Player 1 won!"
  else if (p1 == "paper" && p2 == "rock") return "Player 1 won!"
  else return "Player 2 won!"
}

//smart
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!"
  }
  return `Player ${
    /rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2
  } won!`
}

//good
const RPS_LOOKUP = {
  rr: 0,
  rs: 1,
  rp: 2,
  sr: 2,
  ss: 0,
  sp: 1,
  pr: 1,
  ps: 2,
  pp: 0,
}

const rps = (p1, p2) => {
  const n = RPS_LOOKUP[p1[0] + p2[0]]
  return n ? `Player ${n} won!` : "Draw!"
}
