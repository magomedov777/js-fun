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
