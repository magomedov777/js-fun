//MAP
maps = (x) => x.map((el) => el * 2)

function maps(x) {
  return x.map((el) => el * 2)
}

//with cycle for
function maps(x) {
  let arr = []
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i] * 2)
  }
  return arr
}

function maps(x) {
  var arr = []
  for (let i = 0; i < x.length; i++) {
    arr[i] = x[i] + x[i]
  }
  return arr
}

//other
function maps(x) {
  return x.map((num) => num * 2)
}

const maps = (x) => x.map((x) => x + x)

//--------------------------------------------

function paperwork(n, m) {
  if ((n < 0) | (m < 0)) {
    return 0
  }
  return n * m
}

paperwork = (n, m) => ((n < 0) | (m < 0) ? 0 : n * m)

//with Math.max
const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m)

function paperwork(n, m) {
  return Math.max(0, n) * Math.max(0, m)
}

//other
const paperwork = (...n) => n.reduce((s, e) => s * Math.max(e, 0), 1)

//________________________________________________________
