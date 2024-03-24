//new lesson | friday
//cascading subsets
//first
function eachCons(array, n) {
  let res = []
  for (let i = 0; i < array.length; i++) {
    res.push(array.slice(i, i + n))
  }
  return res.filter((el) => el.length === n)
}

//good
function eachCons(array, n) {
  let cascadingSubset = []
  for (i = 0; i <= array.length - n; i++) {
    cascadingSubset.push(array.slice(i, i + n))
  }
  return cascadingSubset
}

//like
function eachCons(array, n) {
  return array.map((x, y) => array.slice(y, y + n)).filter((x) => x.length == n)
}

//one line
eachCons = (array, n) =>
  array.map((x, y) => array.slice(y, y + n)).filter((x) => x.length == n)

//spread | Math.max
eachCons = (l, n) =>
  [...Array(Math.max(0, l.length - n + 1)).keys()].map((i) => l.slice(i, i + n))

//for in for
eachCons = (arr, n) => {
  let result = []
  for (let i = 0; i <= arr.length - n; i++) {
    let temp = []
    for (let j = 0; j < n; j++) {
      temp.push(arr[i + j])
    }
    result.push(temp)
  }
  return result
}

//array methods
function eachCons(array, n) {
  return array
    .map((x, y) => array.slice(y, y + n))
    .filter((x) => x.length === n)
}

//------------------------------------------------------------
//wilson primes task
//first
function amIWilson(p) {
  return [5, 13, 563].indexOf(p) > -1
}

//oneline
amIWilson = (p) => [5, 13, 563].indexOf(p) > -1

//step by step
function amIWilson(p) {
  p = BigInt(p)
  const fac = (n) => (n ? n * fac(n - 1n) : 1n)
  const d = fac(p - 1n) + 1n
  return !(d % (p * p))
}

//clever
function amIWilson(p) {
  return p == 5 || p == 13 || p == 563
}

//includes | like
amIWilson = (p) => [5, 13, 563].includes(p)

//true | false
function amIWilson(p) {
  return p === 5 || p === 13 || p === 563 ? true : false
}

//goooooood | recursion
const amIWilson = (num) => ((factorial(num - 1) + 1) / (num * num)) % 1 === 0

const factorial = (x) => (x <= 1 ? 1 : x * factorial(x - 1))
