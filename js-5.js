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

function digitize(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map(function (i) {
      return parseInt(i)
    })
}

function digitize(n) {
  let str = n + ""
  let arr = []
  for (let i = str.length - 1; i >= 0; i--) arr.push(+str[i])
  return arr
}

//--------------------------------------------------------------

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0
}

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0
