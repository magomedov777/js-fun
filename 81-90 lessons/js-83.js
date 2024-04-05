//new lesson | friday
//you're a square task
//first | one line
isSquare = (n) => (Math.sqrt(n) % 1 === 0 ? true : false)

//base syntax
function isSquare(n) {
  return Math.sqrt(n) % 1 === 0
}

//good | isInteger
isSquare = (n) => Number.isInteger(Math.sqrt(n))

//if/else | func exp
const isSquare = function (n) {
  if (Math.sqrt(n) % 1 == 0) return true
  else return false
}

//cycle for
function isSquare(n) {
  for (let x = 0; x <= n; x++) {
    if (n === 0) {
      return true
    } else if (n / x === x) {
      return true
    }
  }
  return false
}

//bitwise NOT
function isSquare(n) {
  n = Math.sqrt(n)
  return ~~n === n
}

//sqrt & Math.floor
function isSquare(n) {
  let r = Math.sqrt(n)
  return r === Math.floor(r)
}

//across **
isSquare = (n) => (n ** (1 / 2) % 1 === 0 ? true : false)

//Math.trunc
isSquare = (n) => Math.sqrt(n) === Math.trunc(Math.sqrt(n))

//reg exp | one line
isSquare = (n) => /^[0-9]+$/.test(Math.sqrt(n))

//like
function isSquare(n) {
  return Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n)) == n
}

//gooooood
const squares = new Array(65536)
  .join(',')
  .split(',')
  .map(function (n, i) {
    return i * i
  })

function isSquare(n) {
  return squares.indexOf(n) > -1
}
