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
