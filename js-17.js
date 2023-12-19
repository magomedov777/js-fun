//new lesson
//first task
function moveZeros(arr) {
  let withoutZeros = []
  let zeros = []
  for (let num of arr) {
    if (num !== 0) {
      withoutZeros.push(num)
    } else {
      zeros.push(num)
    }
  }
  return withoutZeros.concat(zeros)
}

//new with func declaration
const moveZeros = function (arr) {
  return arr
    .filter(function (x) {
      return x !== 0
    })
    .concat(
      arr.filter(function (x) {
        return x === 0
      })
    )
}

//good
const moveZeros = function (arr) {
  let filtedList = arr.filter(function (num) {
    return num !== 0
  })
  let zeroList = arr.filter(function (num) {
    return num === 0
  })
  return filtedList.concat(zeroList)
}

//smart
const moveZeros = function (arr) {
  return [...arr.filter((n) => n !== 0), ...arr.filter((n) => n === 0)]
}

//shortest | with sort
function moveZeros(arr) {
  return arr.sort((a, b) => (b === 0 ? -1 : 0))
}
