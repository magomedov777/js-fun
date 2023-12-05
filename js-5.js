function digitize(n) {
  let str = n.toString()
  let arr = str.split("")
  let res = arr.map((el) => +el)
  return res.reverse()
}

const digitize = (num) =>
  num
    .toString()
    .split("")
    .reverse()
    .map((el) => +el)

function digitize(n) {
  return Array.from(String(n), Number).reverse()
}

const digitize = (x) => {
  x = `${x}`.split("").reverse()
  let a = []
  for (let i = 0; i < x.length; i++) {
    a.push(+x[i])
  }
  return a
}
