function digitize(n) {
  let str = n.toString()
  let arr = str.split("")
  let res = arr.map((el) => +el)
  return res.reverse()
}
