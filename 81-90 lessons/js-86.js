//new lesson | wednesday
//square every digit
//first
squareDigits = (num) =>
  +String(num)
    .split('')
    .map((el) => el ** 2)
    .join('')

//good
function squareDigits(num) {
  return Number(
    ('' + num)
      .split('')
      .map(function (val) {
        return val * val
      })
      .join('')
  )
}

//base syntax
function squareDigits(num) {
  return +num
    .toString()
    .split('')
    .map((i) => i * i)
    .join('')
}

//cycle for
function squareDigits(num) {
  let string = num.toString()
  let results = []
  for (let i = 0; i < string.length; i++) {
    results[i] = string[i] * string[i]
  }
  return Number(results.join(''))
}

//like
function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .map((n) => Math.pow(parseInt(n), 2))
      .join('')
  )
}

//reg EXP
function squareDigits(num) {
  return +(num + '').replace(/\d/g, (matched) => matched * matched)
}

//clever
function squareDigits(num) {
  return ~~num
    .toString()
    .split('')
    .reduce(function (p, c) {
      return '' + p + ~~c * ~~c
    }, '')
}

//---------------------------------------------------------------------------
//make me slow task
//first
function makeMeSlow() {
  for (let x = 0; x < 7000000000; x++) {}
}

//like | fun
Date.prototype.getTime = (function () {
  const xs = [7000, 0]
  return () => xs.pop()
})()

function makeMeSlow() {}

//fun
function makeMeSlow() {
  Date.prototype.getTime = () => Date.now() + 7777
}

//while
makeMeSlow = () =>
  ((start) => {
    while (Date.now() - start < 7000);
  })(Date.now())

//for in for
makeMeSlow = () => {
  for (let i = 0; i < 200000; i++) for (let j = 0; j < 100000; j++) {}
}
