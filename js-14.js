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

//----------------------------------------------

//new str task
//first solution
removeExclamationMarks = (s) => s.replace(/!/g, "")

//good
function removeExclamationMarks(s) {
  return s.split("!").join("")
}

//with replaceAll
function removeExclamationMarks(s) {
  return s.replaceAll("!", "")
}

//good
function removeExclamationMarks(s) {
  let arr = s.split("")
  arr = arr.filter(function (e) {
    return e !== "!"
  })
  return arr.join("")
}

//---------------------------------------------------

//transportation on vacation || fundamentals
//first
const rentalCarCost = (d) => {
  if (d >= 7) return d * 40 - 50
  if (d >= 3) return d * 40 - 20
  if (d < 3) return d * 40
}

//ternary solution
rentalCarCost = (d) => d * 40 - (d > 6 ? 50 : d > 2 ? 20 : 0)

//-----------------------------------------------
//new task | fundamental
const quarterOf = (month) => {
  if (month <= 3) return 1
  if (month <= 6) return 2
  if (month <= 9) return 3
  if (month <= 12) return 4
}

//short
const _quarterOf = (m) => Math.ceil(m / 3)

//switch/case | just for fun
const __quarterOf = (month, quarter = 4) => {
  switch (month) {
    case 1:
    case 2:
    case 3:
      quarter = 1
      break
    case 4:
    case 5:
    case 6:
      quarter = 2
      break
    case 7:
    case 8:
    case 9:
      quarter = 3
      break
  }
  return quarter
}
