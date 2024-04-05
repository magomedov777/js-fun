//new lesson | tuesday
//starting marks
//first
function startingMark(bodyHeight) {
  let x = (10.67 - 9.45) / (1.83 - 1.52)
  return Math.round((10.67 + x * bodyHeight - x * 1.83) * 100) / 100
}

//clever
startingMark = (bodyHeight) => +(bodyHeight * 3.9354 + 3.4681).toFixed(2)

//goood
function startingMark(bodyHeight) {
  let a = { x: 1.52, y: 9.45 },
    b = { x: 1.83, y: 10.67 },
    m = (b.y - a.y) / (b.x - a.x)
  return Math.round((m * bodyHeight + b.y - m * b.x) * 100) / 100
}

//step by step | across variable
startingMark = (bodyHeight) => {
  const relativeHeight = bodyHeight - 1.52
  const adjustmentConstant = (10.67 - 9.45) / (1.83 - 1.52)
  const bestMark = 9.45 + relativeHeight * adjustmentConstant
  return Math.round(bestMark * 100) / 100
}

//like
function startingMark(bodyHeight) {
  return +(bodyHeight * 3.935484 + 3.468065).toFixed(2)
}
