//Square(n) Sum
function squareSum(numbers) {
  return numbers.map((el) => el ** 2).reduce((acc, val) => acc + val, 0)
}

//short syntax | arrow
squareSum = (num) => num.map((el) => el ** 2).reduce((acc, val) => acc + val, 0)
