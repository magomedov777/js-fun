//new task
function areYouPlayingBanjo(name) {
  if (name[0] === "R" || name[0] === "r") {
    return `${name} plays banjo`
  } else return `${name} does not play banjo`
}

//new solution
function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  )
}

//with lowerCase
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === "r") {
    return name + " plays banjo"
  } else {
    return name + " does not play banjo"
  }
}

//with const & ternary
const areYouPlayingBanjo = (name) =>
  name.startsWith("R") || name.startsWith("r")
    ? `${name} plays banjo`
    : `${name} does not play banjo`

//other
const areYouPlayingBanjo = (name) => {
  const plays = name.toLowerCase().startsWith("r") ? "plays" : "does not play"
  return `${name} ${plays} banjo`
}

//with regular expression
function areYouPlayingBanjo(name) {
  return name.match(/^r.+/i)
    ? `${name} plays banjo`
    : `${name} does not play banjo`
}

//_________________________________________________________

//first solution
function findAverage(array) {
  if (!array.length) {
    return 0
  }
  if (array.length) {
    return array.reduce((acc, cur) => acc + cur) / array.length
  }
}

const find_average = (array) => {
  return array.length === 0
    ? 0
    : array.reduce((acc, ind) => acc + ind, 0) / array.length
}

//with cycle for
function find_average(array) {
  if (array.length === 0) {
    return 0
  }
  let result = 0
  for (i = 0; i < array.length; i++) {
    result += array[i]
  }
  return result / array.length
}

//other solution
const find_average = (array) =>
  array.reduce((acc, curr) => acc + curr, 0) / array.length || 0

//like!
function find_average(array) {
  if (array.length == 0) return 0
  let result = 0
  for (num of array) {
    result += num
  }
  return result / array.length
}

//------------------------------------------------------
//new task, first solution
function betterThanAverage(classPoints, yourPoints) {
  let sum = classPoints.reduce((acc, curr) => acc + curr) / classPoints.length
  if (yourPoints > sum) {
    return true
  }
  return false
}

function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
  )
}

//with for cycle
function betterThanAverage(classPoints, yourPoints) {
  let classAvg = 0
  for (let i = 0; i < classPoints.length; i++) {
    classAvg += classPoints[i]
  }
  classAvg = classAvg / classPoints.length
  return yourPoints > classAvg
}
