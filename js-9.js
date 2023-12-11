//new tasks
//first solution
check = (a, x) => (a.includes(x) ? true : false)

//with func
function check(a, x) {
  return a.includes(x)
}

//with indexOf
function check(a, x) {
  return a.indexOf(x) > -1 ? true : false
}

//with filter
function check(a, x) {
  let b = a.filter((el) => el == x)
  return b.length ? true : false
}

//with cycle for
function check(a, x) {
  return a.indexOf(x) > -1 ? true : false
}

//with some
const check = (a, x) => a.some((val) => val === x)

//other solution
const check = Function.prototype.call.bind(Array.prototype.includes)

const check = (array, value) => !!~array.indexOf(value)

//------------------------------------------
//new task, string
//first solution
fakeBin = (x) =>
  x
    .split("")
    .map((el) => (el < 5 ? 0 : 1))
    .join("")

//solution with replace()
function fakeBin(x) {
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1))
}
