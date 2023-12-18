// new lesson
//fundamental | alghoritms
//first task
enough = (cap, on, wait) => (cap - on >= wait ? 0 : Math.abs(cap - on - wait))

//best practices
function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0)
}

//base
function enough(cap, on, wait) {
  return on + wait > cap ? on + wait - cap : 0
}

//if/else
function enough(cap, on, wait) {
  if (on + wait < cap) {
    return 0
  } else {
    return on + wait - cap
  }
}

//switch/case | for fun
function enough(cap, on, wait) {
  switch (true) {
    case on + wait - cap > 0:
      return on + wait - cap
    default:
      return 0
  }
}

//with variable
function enough(cap, on, wait) {
  let free = cap - on
  let final = free - wait
  if (final >= 0) return 0
  else return Math.abs(final)
}

//--------------------------------------

//geometry |>
//first
otherAngle = (a, b) => 180 - (a + b)

//base
function otherAngle(a, b) {
  return 180 - (a + b)
}

//with if/else
function otherAngle(a, b) {
  if (a < 0 || b < 0) return 0
  if (a + b >= 180) return 0
  return 180 - a - b
}

//with variable
function otherAngle(a, b) {
  let c = a + b
  let z = 180 - c
  return z
}

//fun
let otherAngle = (a = "📐", b = "❓") => ("❗", 180 - a - b)

//-----------------------------------------------------------

//mathematics
//first
function cockroachSpeed(s) {
  if (s >= 0) return Math.floor((s * 100000) / 3600)
}

//shorts
const cockroachSpeed = (s) => Math.floor(s / 0.036)

//with variable
function cockroachSpeed(s) {
  const secsInHour = 3600
  const centimetersInKilometers = 100000
  return Math.floor((s * centimetersInKilometers) / secsInHour)
}
