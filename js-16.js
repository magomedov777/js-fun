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