//Square(n) Sum
function squareSum(numbers) {
  return numbers.map((el) => el ** 2).reduce((acc, val) => acc + val, 0)
}

//short syntax | arrow
squareSum = (num) => num.map((el) => el ** 2).reduce((acc, val) => acc + val, 0)

//with cycle for
function squareSum(numbers) {
  let result = 0
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i] * numbers[i]
  }
  return result
}

//repeat str
function repeatStr(n, s) {
  let str = ""
  for (let i = 0; i < n; i++) str += s
  return str
}
