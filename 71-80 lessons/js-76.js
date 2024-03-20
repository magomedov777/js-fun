//new lesson || tuesday
//str task
//first
function isOpposite(s1, s2) {
  if (s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false
  for (let i = 0; i < s1.length; i++) {
    if (s1.charAt(i) === s2.charAt(i)) return false
  }
  return true
}

//good
function isOpposite(s1, s2) {
  return (
    s1
      .split('')
      .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
      .join('') === s2 && s1 !== ''
  )
}

//like
function isOpposite(s1, s2) {
  return (
    s1 != '' &&
    s1 ==
      s2.replace(/./g, (ch) =>
        ch['to' + (ch <= 'Z' ? 'Lower' : 'Upper') + 'Case']()
      )
  )
}

//gooooood
function isOpposite(s1, s2) {
  return (
    s1 !== s2 &&
    s1
      .split('')
      .map(function (el) {
        return /[a-z]/.test(el) ? el.toUpperCase() : el.toLowerCase()
      })
      .join('') == s2
  )
}

//regEXP
isOpposite = (s1, s2) =>
  !!s1 &&
  s2 ===
    s1.replace(/[A-Z]/gi, (val) =>
      val[`to${val < `a` ? `Low` : `Upp`}erCase`]()
    )

//clever
function isOpposite(s1, s2) {
  return (s1 == '' && s2 == '') || s1.length != s2.length
    ? false
    : [...s1].every(
        (x, i) => Math.abs(x.charCodeAt() - s2[i].charCodeAt()) == 32
      )
}

//-------------------------------------------------------------------------------
//simple comparsion
//first
add = (a, b) => (+a == b ? true : false)

//works too
function add(a, b) {
  return a == b
}

//good
function add(a, b) {
  return +a == +b
}

//Object.keys
function add(a, b) {
  let val = {}
  val[a] = 'first'
  val[b] = 'second'
  return Object.keys(val).length === 1 ? true : false
}

//like
add = (a, b) => +a - +b == 0

//with interpolation
function add(a, b) {
  return `${a}` == `${b}`
}

//---------------------------------------------------------------------------
//index of
//first
firstToLast = (str, c) =>
  str.indexOf(c) < 0 ? -1 : str.lastIndexOf(c) - str.indexOf(c)

//good
function firstToLast(str, c) {
  let first = str.indexOf(c),
    last = str.lastIndexOf(c)
  return first == -1 ? -1 : last - first
}

//good
function firstToLast(str, c) {
  return str.indexOf(c) < 0 ? -1 : str.lastIndexOf(c) - str.indexOf(c)
}

//clever
function firstToLast(str, c) {
  return str.lastIndexOf(c) - Math.max(0, str.indexOf(c))
}

//across variables
function firstToLast(str, c) {
  let firstIndex = str.indexOf(c)
  let lastIndex = str.lastIndexOf(c)
  if (firstIndex === -1) {
    return -1
  } else {
    return lastIndex - firstIndex
  }
}
