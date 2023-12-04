//Basic Mathematical Operations

//if

function basicOp(operation, value1, value2) {
  if (operation === "+") {
    return value1 + value2
  }
  if (operation === "-") {
    return value1 - value2
  }
  if (operation === "*") {
    return value1 * value2
  }
  if (operation === "/") {
    return value1 / value2
  }
}

//switch case

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2
    case "-":
      return value1 - value2
    case "*":
      return value1 * value2
    case "/":
      return value1 / value2
    default:
      return 0
  }
}

//shorts solution

function basicOp(o, a, b) {
  return eval(a + o + b)
}

//-----------------------------------

basicOp = (operation, value1, value2) => {
  eval(`${value1} ${operation} ${value2}`)
}

//how litres | alhoritms task

litres = (time) => Math.floor(time * 0.5)

//with '/'
function litres(time) {
  return Math.floor(time / 2)
}

function litres(time) {
  return parseInt(time / 2)
}
