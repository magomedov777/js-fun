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
