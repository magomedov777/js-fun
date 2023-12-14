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

//with objects
const rps = (p1, p2) => {
  console.log(p1, p2)
  const playing = {
    scissors: {
      rock: "Player 2 won!",
      paper: "Player 1 won!",
      scissors: "Draw!",
    },
    paper: {
      rock: "Player 1 won!",
      scissors: "Player 2 won!",
      paper: "Draw!",
    },
    rock: {
      rock: "Draw!",
      paper: "Player 2 won!",
      scissors: "Player 1 won!",
    },
  }
  return playing[p1][p2]
}

//------------------------------------------------------
//points task
//first
points = (games) =>
  games.reduce((a, b) => (a += b[0] > b[2] ? 3 : b[0] < b[2] ? 0 : 1), 0)

//bae
function points(games) {
  let total = 0
  games.map((game) => {
    if (game[0] === game[2]) {
      total += 1
    } else if (game[0] > game[2]) {
      total += 3
    }
  })
  return total
}

//with cycle for
function points(games) {
  let sum = 0
  for (let i = 0; i < games.length; ++i) {
    if (games[i][0] > games[i][2]) sum += 3
    if (games[i][0] == games[i][2]) sum += 1
  }
  return sum
}

//---------------------------------------
//get grade func
//first
function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3
  if (score >= 90 && score <= 100) return "A"
  if (score >= 80 && score < 90) return "B"
  if (score >= 70 && score < 80) return "C"
  if (score >= 60 && score < 70) return "D"
  if (0 <= score < 60) return "F"
}
