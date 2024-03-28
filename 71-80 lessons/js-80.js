//new lesson | tuesday
//collinearity
//first | one line
collinearity = (x1, y1, x2, y2) => x1 * y2 === y1 * x2

//base
function collinearity(x1, y1, x2, y2) {
  return x1 * y2 === y1 * x2
}

//like | difficult
collinearity = (x1, y1, x2, y2) =>
  (x1 == 0 && y1 == 0) ||
  (x2 == 0 && y2 == 0) ||
  (x1 == 0 && x2 == 0) ||
  (y1 == 0 && y2 == 0)
    ? true
    : x1 / x2 == y1 / y2
    ? true
    : false

//step by step | across variable
function collinearity(x1, y1, x2, y2) {
  let equalK = x1 / x2 == y1 / y2
  let zeroX = x1 == 0 && x2 == 0
  let zeroY = y1 == 0 && y2 == 0
  let zerovector1 = x1 == 0 && y1 == 0
  let zerovector2 = x2 == 0 && y2 == 0
  if (equalK || zeroX || zeroY || zerovector1 || zerovector2) {
    return true
  } else {
    return false
  }
}

//---------------------------------------------------------------------
//number game | OOP
//first
class Guesser {
  constructor(number, lives) {
    this.number = number
    this.lives = lives
  }

  guess(n) {
    if (this.lives < 1) throw error
    return this.number === n || !this.lives--
  }
}

//good
class Guesser {
  constructor(number, lives) {
    this.number = number
    this.lives = lives
  }

  guess(n) {
    if (!this.lives) throw Error
    this.lives--
    return n === this.number
  }
}

//true | false
class Guesser {
  constructor(number, lives) {
    this.number = number
    this.lives = lives
  }

  guess(n) {
    if (!this.lives) throw 'No guesses left'
    if (n === this.number) return true
    this.lives--
    return false
  }
}

//like
class Guesser {
  constructor(number, lives) {
    this.number = number
    this.lives = lives
  }

  guess(n) {
    let answer
    if (this.lives == 0) {
      throw Error
    } else if (this.number == n) {
      answer = true
    } else {
      answer = false
      this.lives--
    }
    return answer
  }
}
