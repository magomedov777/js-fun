//Sum Arrays
//first solution
sum = (numbers) => (!numbers ? 0 : numbers.reduce((acc, curr) => acc + curr, 0))

//easy
function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0)
}
