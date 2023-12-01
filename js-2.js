evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd")

//Even or Odd | short solution

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even"
  }
  return "Odd"
}

//other solution

positiveSum = (arr) =>
  arr.filter((i) => i > 0).reduce((acc, item) => acc + item, 0)

//sum of all positive numbers | arr | short solution

function positiveSum(arr) {
  let total = 0
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      total += arr[i]
    }
  }
  return total
}

//sum of all positive numbers with for cycle | new solution
