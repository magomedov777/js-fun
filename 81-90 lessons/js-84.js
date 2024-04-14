//new lesson | thursday
//formula task
//first
let isValid = (formula) =>
  !(formula.includes(1) && formula.includes(2)) &&
  !(formula.includes(3) && formula.includes(4)) &&
  formula.includes(5) === formula.includes(6) &&
  (formula.includes(7) || formula.includes(8))

//across variables
function isValid(formula) {
  const cannot = (a, b) => {
    const containsA = formula.includes(a)
    const containsB = formula.includes(b)
    return containsA !== containsB || !containsA
  }
  const must = (a, b) => formula.includes(a) === formula.includes(b)
  const any = (a, b) => formula.includes(a) || formula.includes(b)
  return cannot(1, 2) && cannot(3, 4) && must(5, 6) && any(7, 8)
}

//base
function isValid(f) {
  return (
    !(f.includes(1) && f.includes(2)) &&
    !(f.includes(3) && f.includes(4)) &&
    f.includes(5) === f.includes(6) &&
    (f.includes(7) || f.includes(8))
  )
}

//good
function isValid(formula) {
  const has = formula.includes.bind(formula)
  return has(1) && has(2)
    ? false
    : has(3) && has(4)
    ? false
    : has(5) ^ has(6)
    ? false
    : !has(7) && !has(8)
    ? false
    : true
}

//if/else
function isValid(formula) {
  if (formula.includes(1) && formula.includes(2)) {
    return false
  } else if (formula.includes(3) && formula.includes(4)) {
    return false
  } else if (formula.includes(5) != formula.includes(6)) {
    return false
  } else if (formula.includes(7) || formula.includes(8)) {
    return true
  } else {
    return false
  }
}

//filter | like
const isValid = (formula) => {
  const containsMaterial1Or2 = formula.filter((material) => material === 1 || material === 2)
  const containsMaterial3Or4 = formula.filter((material) => material === 3 || material === 4)
  const containsMaterial5Or6 = formula.filter((material) => material === 5 || material === 6)
  const containsMaterial7Or8 = formula.filter((material) => material >= 7)
  return (
    containsMaterial1Or2.length < 2 &&
    containsMaterial3Or4.length < 2 &&
    containsMaterial7Or8.length > 0 &&
    (containsMaterial5Or6.length === 0 || containsMaterial5Or6.length === 2)
  )
}

//some | every
function isValid(formula) {
  const not = (x) => (arr) => arr.every((y) => y !== x)
  const and = (x) => (arr) => arr.some((y) => y === x)
  const replace = (x) => () => x
  const rules = {
    1: not(2),
    2: not(1),
    3: not(4),
    4: not(3),
    5: and(6),
    6: and(5),
    7: replace('*'),
    8: replace('*'),
  }
  const rulesResult = formula.map((x) => rules[x] && rules[x](formula))
  return rulesResult.includes('*') && rulesResult.every((x) => !!x)
}

//forEach | Math.ceil
function isValid(formula) {
  let m = [0, 0, 0, 0]
  formula.forEach((e) => {
    m[Math.ceil(e / 2 - 1)]++
  })
  return m[0] < 2 && m[1] < 2 && (m[2] === 0 || m[2] === 2) && m[3] > 0
}

//regEXP + array methods
isValid = (formula) =>
  /^[12]?[34]?(?:56)?[78]{1,2}$/.test([...formula].sort((a, b) => a - b).join``)

//--------------------------------------------------------------------------------------------

//isograms
//first
function isIsogram(str) {
  let x = new Set(str.toLowerCase())
  if (str.length === x.size) {
    return true
  }
  return false
}

//gooooood
function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length
}

//regEXP | one line
isIsogram = (str) => !/(\w).*\1/i.test(str)

//for in for
function isIsogram(str) {
  let i, j
  str = str.toLowerCase()
  for (i = 0; i < str.length; ++i)
    for (j = i + 1; j < str.length; ++j) if (str[i] === str[j]) return false
  return true
}

//regEXP
isIsogram = (str) => !str.match(/([a-z]).*\1/i)

//like
function isIsogram(str) {
  return (
    !str ||
    str
      .toLowerCase()
      .split('')
      .every(function (v, i, arr) {
        return arr.indexOf(v) == i
      })
  )
}
