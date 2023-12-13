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

//with Array.from()
const countBy = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x)
