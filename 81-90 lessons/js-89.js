//new lesson | thursday
//exes and ohs
//first
function XO(str) {
  str = str.toLowerCase().split('')
  return str.filter((x) => x === 'x').length === str.filter((x) => x === 'o').length
}

//regExp
function XO(str) {
  let x = str.match(/x/gi)
  let o = str.match(/o/gi)
  return (x && x.length) === (o && o.length)
}

//good
function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
}

//cycle for
function XO(str) {
  let sum = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == 'x') sum++
    if (str[i].toLowerCase() == 'o') sum--
  }
  return sum == 0
}

//two func solution
function XO(str) {
  let countX = countStr(str, 'x')
  let countO = countStr(str, 'o')
  return countX === countO
}

function countStr(s, match) {
  let regex = new RegExp(match, 'gi')
  return (s.match(regex) || []).length
}

//shorts
XO = (str) => str.replace(/o/gi, '').length == str.replace(/x/gi, '').length

//----------------------------------------------------------------------------------------------

//new task
//shortest word
//first
findShort = (s) =>
  Math.min.apply(
    this,
    s.split(' ').map((el) => el.length)
  )

//like
function findShort(s) {
  return Math.min(...s.split(' ').map((s) => s.length))
}

//cycle for
function findShort(s) {
  let arr = s.split(' ')
  let smallest = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < smallest.length) {
      smallest = arr[i]
    }
  }
  return smallest.length
}

//array methods
findShort = (s) =>
  s
    .split(' ')
    .sort((a, b) => b.length - a.length)
    .pop().length
