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
