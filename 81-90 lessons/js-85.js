//new lesson | wednesday
//Sum of two lowest positive integers
//first
function sumTwoSmallestNumbers(numbers) {
  numbers = numbers.sort(function (a, b) {
    return a - b
  })
  return numbers[0] + numbers[1]
}

//base | good
function sumTwoSmallestNumbers(numbers) {
  ;[a, b] = numbers.sort((prev, curr) => prev - curr)
  return a + b
}

//like
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b)
  return numbers[0] + numbers[1]
}

//array methods
sumTwoSmallestNumbers = (numbers) =>
  numbers
    .sort((x, y) => x - y)
    .slice(0, 2)
    .reduce((x, y) => x + y)

//one line
sumTwoSmallestNumbers = (a) => (a = a.sort((x, y) => x - y))[0] + a[1]

//------------------------------------------------------------------------
//sum of odd numbers
//first | one line
rowSumOddNumbers = (n) => n ** 3

//Math.pow
function rowSumOddNumbers(n) {
  return Math.pow(n, 3)
}

//multiply
function rowSumOddNumbers(n) {
  return n * n * n
}

//clever
rowSumOddNumbers = (n) =>
  Array.from({ length: (n * (n + 1)) / 2 }, (_, i) => i * 2 + 1)
    .slice(-n)
    .reduce((a, b) => a + b, 0)

//---------------------------------------------------------------------------------
//List Filtering
//first | one line
filter_list = (l) => l.filter((el) => el !== String(el))

//typeof
function filter_list(l) {
  return l.filter(function (v) {
    return typeof v == 'number'
  })
}

//good
function filter_list(l) {
  return l.filter((e) => Number.isInteger(e))
}

//like
filter_list = (l) => l.filter(Number.isInteger)
