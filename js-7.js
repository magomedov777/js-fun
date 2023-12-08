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
