//new lesson
//first task
const listSquared = (x, y) => {
  let array = []
  for (let i = x; i <= y; i++) {
    let result = 0
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        result += j * j
      }
    }
    if (Math.sqrt(result) % 1 === 0) {
      array.push([i, result])
    }
  }
  return array
}

//new
const _listSquared = (m, n) => {
  const res = []
  for (let i = m; i <= n; i++) {
    let sum = 0
    for (let j = 1; j <= n; j++) {
      if (!(i % j)) sum += j ** 2
    }
    if (Number.isInteger(sum ** 0.5)) res.push([i, sum])
  }
  return res
}
