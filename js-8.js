//Sum Arrays
//first solution
sum = (numbers) => (!numbers ? 0 : numbers.reduce((acc, curr) => acc + curr, 0))

//easy
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0)
}

//with cycle for
sum = function (numbers) {
  "use strict"
  let total = 0
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
  }
  return total
}

//----------------------------------
//invert array
invert = (array) => array.map((el) => -el)

//easy | base
function invert(array) {
  return array.map((x) => (x === 0 ? x : -x))
}

//solution with cycle for
function invert(array) {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    newArr.push(-array[i])
  }
  return newArr
}

function invert(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= -1
  }
  return array
}
//smart
function invert(array) {
  return array.map((e) => e * -1)
}

//-----------------------------------------------

//new task
//solution with ternary
simpleMultiplication = (n) => (n % 2 === 0 ? n * 8 : n * 9)

//base
function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8)
}

//base with if/else
function simpleMultiplication(value) {
  if (value % 2 === 0) {
    return value * 8
  } else {
    return value * 9
  }
}
//switch/case
function simpleMultiplication(number) {
  switch (true) {
    case number % 2 == 0:
      return number * 8
    default:
      return number * 9
  }
}

//-------------------------------
//Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) {
    return []
  }
  let arr = []
  arr.push(input.filter((el) => el > 0).length)
  arr.push(input.filter((el) => el < 0).reduce((acc, curr) => acc + curr, 0))
  return arr
}

//with cycle for
function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0) return []
  let positive = 0
  let negative = 0
  for (let i = 0, l = input.length; i < l; ++i) {
    if (input[i] > 0) ++positive
    else negative += input[i]
  }
  return [positive, negative]
}

//one line
function countPositivesSumNegatives(input) {
  return input && input.length
    ? [
        input.filter((p) => p > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b, 0),
      ]
    : []
}
