//new lesson
//count by x
function countBy(x, n) {
  let arr = []
  for (let i = 1; i <= n; i++) {
    let mult = x * i
    arr.push(mult)
  }
  return arr
}
