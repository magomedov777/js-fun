//new lesson | friday
//Math operation
//first
iceBrickVolume = (radius, bottleLength, rimLength) =>
  (bottleLength - rimLength) * 2 * (radius * radius)

//across variable
function iceBrickVolume(radius, bottleLength, rimLength) {
  let brickLength = bottleLength - rimLength
  let brickDepth = radius * 2
  let brickHeight = radius
  return brickLength * brickDepth * brickHeight
}

//good
iceBrickVolume = (r, x, y) => 2 * r * r * (x - y)

//like
iceBrickVolume = (radius, bottleLength, rimLength) =>
  (bottleLength - rimLength) * 2 * radius ** 2

//with help methods
function iceBrickVolume(radius, bottleLength, rimLength) {
  let length = bottleLength - rimLength
  let side = Math.sqrt(radius * radius + radius * radius)
  return Math.round(side * side * length)
}

//not bad
function iceBrickVolume(radius, bottleLength, rimLength) {
  return 2 * Math.pow(radius, 2) * (bottleLength - rimLength)
}

//---------------------------------------------------------------------
//true or none
//first
none = (arr, fun) => (!arr.some(fun) ? true : false)

//short
none = (arr, fun) => !arr.some(fun)

//base func
function none(arr, fun) {
  return !arr.some(fun)
}

//cycle for
function none(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i]) == true) {
      return false
    }
  }
  return true
}

//filter
none = (arr, fun) => arr.filter((a) => fun(a)).length == 0

//reduce
function none(arr, fun) {
  return !arr.reduce((none, item) => fun(item), false)
}
