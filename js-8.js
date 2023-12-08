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
