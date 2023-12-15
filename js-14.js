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

//good
function listSquared(m, n) {
  let chamber = {}
  function wuTang(x) {
    let i = 1,
      odb = [],
      meth
    while (i <= x) {
      !(x % i) ? (odb.push(i), i++) : i++
    }
    meth = odb.reduce(
      (a, e) =>
        (chamber[e] ? chamber[e] : ((chamber[e] = e * e), chamber[e])) + a,
      0
    )
    return !(Math.sqrt(meth) % 1) ? [--i, meth] : null
  }
  return Array.from({ length: n - m }, (e, i) => wuTang(i + m)).filter((e) => e)
}

//short
function listSquared(m, n) {
  const result = []
  for (let i = m; i <= n; i++) {
    let divisorSum = 0
    for (let d = 1; d <= i; d++) {
      if (i % d === 0) divisorSum += d * d
    }
    if (Number.isInteger(Math.sqrt(divisorSum))) result.push([i, divisorSum])
  }
  return result
}
