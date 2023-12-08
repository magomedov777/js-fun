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
