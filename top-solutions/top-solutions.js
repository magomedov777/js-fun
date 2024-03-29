function longestSlideDown(pyramid) {
  for (let i = pyramid.length - 2; i > -1; i--) {
    for (let j = 0; j < pyramid[i].length; j++) {
      pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1])
    }
  }
  return pyramid[0][0]
}

function longestSlideDown(pyramid) {
  pyramid = pyramid.slice(0)
  let i = pyramid.length - 1
  while (i--)
    for (let j = 0; j <= i; ++j)
      pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1])
  return pyramid[0][0]
}

function longestSlideDown(pyramid) {
  for (let idx = 0, len = pyramid.length; idx < pyramid.length; idx++) {
    pyramid[idx].unshift(0)
    pyramid[idx].push(0)
  }
  for (let idx = 1, plen = pyramid.length; idx < plen; idx++) {
    for (let rdx = 0, rlen = pyramid[idx].length; rdx < rlen; rdx++) {
      if (pyramid[idx - 1][rdx - 1] >= pyramid[idx - 1][rdx]) {
        pyramid[idx][rdx] = pyramid[idx][rdx] + pyramid[idx - 1][rdx - 1]
      } else if (pyramid[idx - 1][rdx - 1] <= pyramid[idx - 1][rdx]) {
        pyramid[idx][rdx] = pyramid[idx][rdx] + pyramid[idx - 1][rdx]
      }
    }
  }
  return pyramid[pyramid.length - 1].sort((a, b) => b - a)[0]
}

sumStrings = (x, y) =>
  isNaN(parseInt(x))
    ? y
    : isNaN(parseInt(y))
    ? x
    : String(BigInt(x) + BigInt(y))

function sumStrings(a, b) {
  var res = '',
    c = 0
  a = a.split('')
  b = b.split('')
  while (a.length || b.length || c) {
    c = +(a.length > 0 ? a.pop() : 0) + +(b.length > 0 ? b.pop() : 0) + c
    res = (c % 10).toString() + res
    c = Math.floor(c / 10)
  }
  res = res.replace(/^[0]*/g, '')
  return res
}

function findMultiples(integer, limit) {
  let arr = []
  for (let i = 1; i <= limit; i++) {
    if (i % integer === 0) {
      arr.push(i)
    }
  }
  return arr
}

function noBoringZeros(x) {
  let a = `${x}`.split('')
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] == 0) {
      a.pop()
    } else {
      break
    }
  }
  return Number(a.join(''))
}

noBoringZeros = (n) => +String(n).replace(/0*$/, '')

function unusualFive() {
  return ~(~(~false ^ ((true << true) << true) ^ ~false) ^ true)
}

const unusualFive = () => Math.hypot(Math.ceil(Math.PI), Math.floor(Math.PI))

String.prototype.isUpperCase = function () {
  return this.split('').every((el) => el === el.toUpperCase())
}

const findDifference = (a, b) =>
  Math.abs(
    a.reduce((prev, curr) => prev * curr) -
      b.reduce((prev, curr) => prev * curr)
  )

function powersOfTwo(n) {
  let arr = []
  for (let i = 0; i <= n; i++) {
    arr.push(2 ** i)
  }
  return arr
}

const _testEvan = (n) => !(+n.toString(2).charAt(n.toString(2).length - 1) & 1)

String.prototype.toAlternatingCase = function () {
  new_str = ''
  for (let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      new_str += this[i].toLowerCase()
    } else {
      new_str += this[i].toUpperCase()
    }
  }
  return new_str
}

addLength = (str) => str.split(' ').map((el) => String(el + ' ' + el.length))

function addLength(str) {
  return str.split(' ').map((s) => `${s} ${s.length}`)
}

function tripleTrouble(one, two, three) {
  let res = []
  for (let i = 0; i < one.length; i++) {
    res.push(one[i], two[i], three[i])
  }
  return res.join('')
}

const tripleTrouble = (one, two, three) =>
  one
    .split('')
    .map((letter, index) => letter + two[index] + three[index])
    .join('')

function mergeArrays(arr1, arr2) {
  let newArray = []
  newArray = newArray.concat(arr1)
  for (let i = 0; i < arr2.length; i++) {
    if (newArray.indexOf(arr2[i]) === -1) {
      newArray.push(arr2[i])
    }
  }
  return newArray.sort(function (a, b) {
    return a - b
  })
}

function generateRange(min, max, step) {
  let arr = []
  for (let i = min; i <= max; i += step) {
    arr.push(i)
  }
  return arr
}

function generateRange(min, max, step) {
  let arr = []
  while (min <= max) {
    arr.push(min)
    min += step
  }
  return arr
}

function replace(s) {
  let a = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let arr = s.split('')
  for (let i = 0; i < arr.length; i++) {
    if (a.includes(arr[i])) {
      arr[i] = '!'
    }
  }
  return arr.join('')
}

replace = (s) => s.replace(/[aeiouAEIOU]/g, '!')

function replace(s) {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (s[i] == vowels[j]) {
        s = s.replaceAll(vowels[j], '!')
      }
    }
  }
  return s
}

function arrayMadness(a, b) {
  return (
    a.reduce((sum, el) => sum + el ** 2, 0) >
    b.reduce((sum, el) => sum + el ** 3, 0)
  )
}

function arrayMadness(a, b) {
  let x = a.reduce((acc, curr) => acc + Math.pow(curr, 2), 0)
  let y = b.reduce((acc, curr) => acc + Math.pow(curr, 3), 0)
  if (x > y) {
    return true
  }
  return false
}

findAverage = (nums) => nums.reduce((acc, curr) => acc + curr, 0) / nums.length

const findAverage = function (nums) {
  let sum = 0
  for (n in nums) {
    sum += nums[n]
  }
  return sum / nums.length
}

function findAverage(nums) {
  let sum = 0
  let index = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    index++
  }
  return index >= 1 ? sum / index : sum
}

const _add = (n) => Object.assign((i) => add(i + n), { valueOf: () => n })

include = (arr, item) => (arr.includes(item) ? true : false)

function stringClean(s) {
  let result = ''
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) || s[i] == ' ') result += s[i]
  }
  return result
}

const derive = (coef, exp) => `${coef * exp}x^${exp - 1}`

flip = (d, a) => (d === 'R' ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a))

function tripleTrouble(one, two, three) {
  let res = []
  for (let i = 0; i < one.length; i++) {
    res.push(one[i], two[i], three[i])
  }
  return res.join('')
}

const tripleTrouble = (one, two, three) =>
  one
    .split('')
    .map((letter, index) => letter + two[index] + three[index])
    .join('')

function mergeArrays(arr1, arr2) {
  if (arr1.length == 0 && arr2.length == 0) {
    return []
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      arr1.push(arr2[i])
    }
  }
  return arr1.sort((a, b) => a - b)
}

function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, '')
}

function remove(s) {
  return s.replace(/!/g, '').concat('!')
}

pillars = (numPill, dist, width) =>
  numPill > 1 ? (numPill - 2) * width + (numPill - 1) * dist * 100 : 0

pillars = (n, d, w) => Math.max(0, n - 1) * (d * 100) + Math.max(0, n - 2) * w

function differenceInAges(ages) {
  let youngest = ages[0]
  let oldest = ages[0]
  for (i = 0; i < ages.length; i++) {
    if (ages[i] > oldest) {
      oldest = ages[i]
    } else if (ages[i] < youngest) {
      youngest = ages[i]
    }
  }
  return [youngest, oldest, oldest - youngest]
}

function differenceInAges(ages) {
  let min = Math.min.apply(null, ages)
  let max = Math.max.apply(null, ages)
  let diff = max - min
  return [min, max, diff]
}

function lowercaseCount(str) {
  return str.split('').filter((el) => /[a-z]/.test(el)).length
}

lowercaseCount = (str) => str.match(/[a-z]/g || []).length

function lowercaseCount(str) {
  let arr = str.split('')
  let res = arr.filter((el) => el.toLowerCase())
  let x = res.filter((el) => el.toLowerCase() && el !== el.toUpperCase()).length
  return x
}

const days = ['', 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const howManydays = (n) => {
  switch (n) {
    case n:
      return days[n]
  }
}

function squareArea(A) {
  return Math.round(Math.pow((A * 2) / Math.PI, 2) * 100) / 100
}

function highAndLow(numbers) {
  let x = numbers.split(' ')
  let maxVal = Math.max(...x)
  let minVal = Math.min(...x)
  return `${maxVal} ${minVal}`
}

const nextId = (ids) =>
  ((val) => (val < 0 ? Math.max(...ids) + 1 : val))(
    ids.findIndex((_, idx) => !ids.includes(idx))
  )

function combineNames() {
  return Array.prototype.join.call(arguments, ' ')
}

function nextId(ids) {
  return ids
    .sort((a, b) => a - b)
    .reduce((prev, curr) => prev + (prev === curr), 0)
}

function odds(values) {
  let result = []
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 !== 0) {
      result.push(values[i])
    }
  }
  return result
}

odds = (val) => val.filter((el) => el % 2 === 1)

function getASCII(chars) {
  return [...chars]
    .map((char) => char.charCodeAt())
    .reduce((curr, prev) => prev + curr)
}

validateCode = (code) => /^[123]/g.test(code)

multiply = (number) => number * 5 ** String(Math.abs(number)).length

function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length)
}

numberToPower = (number, power) =>
  power > 0 ? number * numberToPower(number, power - 1) : 1

function numberToPower(number, power) {
  let result = 1
  for (let i = 0; i < power; ++i) result *= number
  return result
}

function numberToPower(number, power) {
  return Array(power)
    .fill(number)
    .reduce((res, n) => res * n, 1)
}

String.prototype.digit = function () {
  return /^\d$/.test(this)
}

function uniTotal(string) {
  return string
    .split('')
    .map((el) => el.charCodeAt(0))
    .reduce((a, b) => a + b, 0)
}

uniTotal = (str) => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0)

const twoHighest = (arr) => {
  return [...new Set(arr.sort((a, b) => b - a))].slice(0, 2)
}

function validateHello(greetings) {
  return /hello|ciao|salut|hallo|hola|ahoj|czesc/g.test(greetings.toLowerCase())
}

cannonsReady = (gunners) =>
  Object.values(gunners).includes('nay') ? 'Shiver me timbers!' : 'Fire!'

cannonsReady = (gunners) => {
  return Object.values(gunners).some((m) => m === 'nay')
    ? 'Shiver me timbers!'
    : 'Fire!'
}

let cannonsReady = (gunners) => {
  for (let i in gunners) {
    if (gunners[i] == 'nay') {
      return 'Shiver me timbers!'
    }
  }
  return 'Fire!'
}

function splitAndMerge(string, separator) {
  return string
    .split(' ')
    .map((el) => el.split('').join(separator))
    .join(' ')
}

function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y)
}

function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
}

function drawStairs(n) {
  let res = []
  for (let i = 0; i < n; i++) {
    res[i] = `${' '.repeat(i)}I`
  }
  return res.join('\n')
}

drawStairs = (n) => [...Array(n)].map((_, i) => ' '.repeat(i) + 'I').join('\n')

function padIt(str, n) {
  while (n > 0) {
    if (n % 2) {
      str = '*' + str
    } else {
      str = str + '*'
    }
    n--
  }
  return str
}

function padIt(str, n) {
  while (n > 0) {
    str = n-- % 2 ? '*' + str : str + '*'
  }
  return str
}

function padIt(str, n) {
  return '*'.repeat(Math.ceil(n / 2)) + str + '*'.repeat(Math.floor(n / 2))
}

logs = (x, a, b) => Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x)

function logs(x, a, b) {
  return Math.log(a * b) / Math.log(x)
}

logs = (x, a, b) => (Math.log(a) + Math.log(b)) / Math.log(x)

function logs(x, a, b) {
  if (x > 0 && x !== 1 && a > 0 && b > 0) {
    return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x)
  }
  return Infinity
}

function flickSwitch(arr) {
  let result = []
  let switchValue = false
  for (let item of arr) {
    if (item === 'flick') {
      switchValue = !switchValue
    }
    result.push(!switchValue)
  }
  return result
}

function flickSwitch(arr) {
  let returning = true
  return arr.map((v) => {
    return v === 'flick' ? (returning = !returning) : returning
  })
}

function flickSwitch(arr) {
  let flag = true
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'flick') {
      flag == false ? (flag = true) : (flag = false)
    }
    arr[i] = flag
  }
  return arr
}

orderOperations = (a) => (2 << 2) << 2

orderOperations = () => '+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*'.length

orderOperations = () => (2 + 2 * 2 + 2) ** 2 / 2

function grabDoll(dolls) {
  let bag = []
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
      bag.push(dolls[i])
    } else {
      continue
    }
    if (bag.length === 3) break
  }
  return bag
}

typeValidation = (variable, type) => typeof variable === type

function match(candidate, job) {
  if (!job.maxSalary || !candidate.minSalary) throw 'Error!'
  return job.maxSalary >= candidate.minSalary * 0.9
}

function sorter(textbooks) {
  return textbooks.sort((a, b) =>
    a.toLowerCase() > b.toLowerCase()
      ? 1
      : a.toLowerCase() < b.toLowerCase()
      ? -1
      : 0
  )
}

function sorter(textbooks) {
  let item = textbooks[0]
  for (let i = 0; i < textbooks.length - 1; i++) {
    for (let j = i + 1; j < textbooks.length; j++) {
      if (textbooks[i].toLowerCase() > textbooks[j].toLowerCase()) {
        item = textbooks[i]
        textbooks[i] = textbooks[j]
        textbooks[j] = item
      }
    }
  }
  return textbooks
}

function generateLink(user) {
  const baseURL = 'http://www.codewars.com/users/'
  return `${baseURL}${encodeURIComponent(user)}`
}

function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`
}

none = (arr, fun) => arr.filter((a) => fun(a)).length == 0

function none(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i]) == true) {
      return false
    }
  }
  return true
}

none = (arr, fun) => !arr.some(fun)

function eachCons(array, n) {
  let res = []
  for (let i = 0; i < array.length; i++) {
    res.push(array.slice(i, i + n))
  }
  return res.filter((el) => el.length === n)
}

eachCons = (l, n) =>
  [...Array(Math.max(0, l.length - n + 1)).keys()].map((i) => l.slice(i, i + n))

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

function eachCons(array, n) {
  return array
    .map((x, y) => array.slice(y, y + n))
    .filter((x) => x.length === n)
}

amIWilson = (p) => [5, 13, 563].indexOf(p) > -1

amIWilson = (p) => [5, 13, 563].includes(p)

const amIWilson = (num) => ((factorial(num - 1) + 1) / (num * num)) % 1 === 0

const factorial = (x) => (x <= 1 ? 1 : x * factorial(x - 1))

function amIWilson(p) {
  return p === 5 || p === 13 || p === 563 ? true : false
}
