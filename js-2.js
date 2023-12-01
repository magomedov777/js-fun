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
