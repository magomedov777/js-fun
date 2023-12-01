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

const removeChar = (str) => str.slice(1, -1)

function removeChar(str) {
  let str1 = str.split("")
  str1.shift()
  str1.pop()
  return str1.join("")
}

function removeChar(str) {
  let input_str = str
  let output_str = ""

  for (let i = 1; i < input_str.length - 1; i++) {
    output_str += input_str[i]
  }
  return output_str
}

function removeChar(str) {
  let res = ""
  for (let i = 0; i < str.length; i++) {
    if (i != 0 && i != str.length - 1) {
      res += str[i]
    }
  }
  return res
}

//solution for remove first and last item in array
