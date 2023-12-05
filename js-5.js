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
