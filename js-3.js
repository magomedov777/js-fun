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

//short syntax
repeatStr = (n, s) => s.repeat(n)

//with cycle while
function repeatStr(n, s) {
  let myString = ""
  while (n > 0) {
    myString += s
    n--
  }
  return myString
}

//sum all positive numbers
function summation(num) {
  let count = 0
  for (let i = 1; i <= num; i++) {
    count += i
  }
  return count
}

//short syntax
const summation = (n) => (n * (n + 1)) / 2

const summation = (num) => ((1 + num) * num) / 2

//find smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let minNum = args[0]
    for (let i = 1; i < args.length; i++) {
      if (args[i] < minNum) {
        minNum = args[i]
      }
    }
    return minNum
  }
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null, args)
  }
}
