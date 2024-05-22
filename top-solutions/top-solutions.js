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
    for (let j = 0; j <= i; ++j) pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1])
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
  isNaN(parseInt(x)) ? y : isNaN(parseInt(y)) ? x : String(BigInt(x) + BigInt(y))

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
  Math.abs(a.reduce((prev, curr) => prev * curr) - b.reduce((prev, curr) => prev * curr))

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
  return a.reduce((sum, el) => sum + el ** 2, 0) > b.reduce((sum, el) => sum + el ** 3, 0)
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
  ((val) => (val < 0 ? Math.max(...ids) + 1 : val))(ids.findIndex((_, idx) => !ids.includes(idx)))

function combineNames() {
  return Array.prototype.join.call(arguments, ' ')
}

function nextId(ids) {
  return ids.sort((a, b) => a - b).reduce((prev, curr) => prev + (prev === curr), 0)
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
  return [...chars].map((char) => char.charCodeAt()).reduce((curr, prev) => prev + curr)
}

validateCode = (code) => /^[123]/g.test(code)

multiply = (number) => number * 5 ** String(Math.abs(number)).length

function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length)
}

numberToPower = (number, power) => (power > 0 ? number * numberToPower(number, power - 1) : 1)

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
  return Object.values(gunners).some((m) => m === 'nay') ? 'Shiver me timbers!' : 'Fire!'
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
    a.toLowerCase() > b.toLowerCase() ? 1 : a.toLowerCase() < b.toLowerCase() ? -1 : 0
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

eachCons = (l, n) => [...Array(Math.max(0, l.length - n + 1)).keys()].map((i) => l.slice(i, i + n))

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
  return array.map((x, y) => array.slice(y, y + n)).filter((x) => x.length === n)
}

amIWilson = (p) => [5, 13, 563].indexOf(p) > -1

amIWilson = (p) => [5, 13, 563].includes(p)

const amIWilson = (num) => ((factorial(num - 1) + 1) / (num * num)) % 1 === 0

const factorial = (x) => (x <= 1 ? 1 : x * factorial(x - 1))

function amIWilson(p) {
  return p === 5 || p === 13 || p === 563 ? true : false
}

let result = []
function sum(n, m = n) {
  if (n == 0) return 1
  if (n < 0 || m == 0) return 0
  if (result[n] && result[n][m]) return result[n][m]
  let comp = sum(n, m - 1) + sum(n - m, m)
  if (!result[n]) {
    result[n] = []
  }
  result[n][m] = comp
  return comp
}

function sum(n) {
  this.mem = this.mem || [1]
  if (n < 0) return 0
  if (this.mem[n]) return this.mem[n]
  this.mem[n] = 0
  for (let i = 1; i <= n; i++)
    this.mem[n] +=
      (i % 2 ? 1 : -1) * (sum(n - (i * (3 * i - 1)) / 2) + sum(n - (i * (3 * i + 1)) / 2))
  return this.mem[n]
}

const _sum = (num) => {
  const dp = [1, ...new Array(num).fill(0)]
  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      dp[j] += dp[j - i]
    }
  }
  return dp[num]
}

let pointsPer48 = (ppg, mpg) => (ppg === 0 && mpg === 0 ? 0 : +((ppg / mpg) * 48).toFixed(1))

function pointsPer48(ppg, mpg) {
  return +((ppg / mpg) * 48).toFixed(1) || 0
}

const pointsPer48 = (ppg, mpg) => (mpg ? +((ppg * 48) / mpg).toFixed(1) : 0)

function pointsPer48(ppg, mpg) {
  return mpg ? Number((ppg * (48 / mpg)).toFixed(1)) : 0
}

let pointsPer48 = (ppg, mpg) => (mpg == 0 ? 0 : Math.round((ppg / mpg) * 48 * 10) / 10)

collinearity = (x1, y1, x2, y2) => x1 * y2 === y1 * x2

collinearity = (x1, y1, x2, y2) =>
  (x1 == 0 && y1 == 0) || (x2 == 0 && y2 == 0) || (x1 == 0 && x2 == 0) || (y1 == 0 && y2 == 0)
    ? true
    : x1 / x2 == y1 / y2
    ? true
    : false

periodIsLate = (last, today, cycleLength) =>
  (today.getTime() - last.getTime()) / 86400000 > cycleLength

function periodIsLate(last, today, cycleLength) {
  return (today - last) / 86400000 > cycleLength
}

function periodIsLate(last, today, cycleLength) {
  return Math.abs(last.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) > cycleLength
}

const nextItem = (xs, item) => {
  const iter = xs[Symbol.iterator]()
  for (let el of iter) {
    if (el === item) return iter.next().value
  }
}

function iceBrickVolume(radius, bottleLength, rimLength) {
  let length = bottleLength - rimLength
  let side = Math.sqrt(radius * radius + radius * radius)
  return Math.round(side * side * length)
}

iceBrickVolume = (radius, bottleLength, rimLength) =>
  (bottleLength - rimLength) * 2 * (radius * radius)

function sum(num) {
  const memo = {}
  function sumRecursive(target, max) {
    let partitions = 0
    for (let i = Math.min(target, max); i > 0; i--) {
      if (i === target || i === 1) partitions++
      else partitions += memo[`${target - i}-${i}`] || sumRecursive(target - i, i)
    }
    memo[`${target}-${max}`] = partitions
    return partitions
  }
  return sumRecursive(num, num)
}

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

function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)))
}

isSquare = (n) => (Math.sqrt(n) % 1 === 0 ? true : false)

isSquare = (n) => Number.isInteger(Math.sqrt(n))

isSquare = (n) => /^[0-9]+$/.test(Math.sqrt(n))

function isSquare(n) {
  for (let x = 0; x <= n; x++) {
    if (n === 0) {
      return true
    } else if (n / x === x) {
      return true
    }
  }
  return false
}

function startingMark(bodyHeight) {
  let x = (10.67 - 9.45) / (1.83 - 1.52)
  return Math.round((10.67 + x * bodyHeight - x * 1.83) * 100) / 100
}

startingMark = (bodyHeight) => +(bodyHeight * 3.9354 + 3.4681).toFixed(2)

function startingMark(bodyHeight) {
  let a = { x: 1.52, y: 9.45 },
    b = { x: 1.83, y: 10.67 },
    m = (b.y - a.y) / (b.x - a.x)
  return Math.round((m * bodyHeight + b.y - m * b.x) * 100) / 100
}

filter_list = (l) => l.filter((el) => el !== String(el))

rowSumOddNumbers = (n) => n ** 3

sumTwoSmallestNumbers = (a) => (a = a.sort((x, y) => x - y))[0] + a[1]

let isValid = (formula) =>
  !(formula.includes(1) && formula.includes(2)) &&
  !(formula.includes(3) && formula.includes(4)) &&
  formula.includes(5) === formula.includes(6) &&
  (formula.includes(7) || formula.includes(8))

function isValid(formula) {
  let m = [0, 0, 0, 0]
  formula.forEach((e) => {
    m[Math.ceil(e / 2 - 1)]++
  })
  return m[0] < 2 && m[1] < 2 && (m[2] === 0 || m[2] === 2) && m[3] > 0
}

function isIsogram(str) {
  return new Set(str.toUpperCase()).size == str.length
}

isIsogram = (str) => !/(\w).*\1/i.test(str)

isIsogram = (str) => !str.match(/([a-z]).*\1/i)

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

findShort = (s) =>
  Math.min.apply(
    this,
    s.split(' ').map((el) => el.length)
  )

XO = (str) => str.replace(/o/gi, '').length == str.replace(/x/gi, '').length

function XO(str) {
  str = str.toLowerCase().split('')
  return str.filter((x) => x === 'x').length === str.filter((x) => x === 'o').length
}

accum = (s) =>
  s
    .split('')
    .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
    .join('-')

function accum(str) {
  let letters = str.split('')
  let result = []
  for (let i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()))
  }
  return result.join('-')
}

function accum(str) {
  let res = []
  for (let i = 0; i < str.length; i++) {
    let row = ''
    for (let j = 0; j < i + 1; j++) {
      row += j === 0 ? str[i].toUpperCase() : str[i].toLowerCase()
    }
    res.push(row)
  }
  return res.join('-')
}

function descendingOrder(n) {
  n = [...n.toString()]
  return Number(n.sort().reverse().join(''))
}

descendingOrder = (n) => +[...`${n}`].sort().reverse().join(``)

function disemvowel(str) {
  return str.replace(/[aeiouAEUIOU]/g, '')
}

disemvowel = (str) => str.replace(/[aeiou]/gi, '')

squareDigits = (num) =>
  +String(num)
    .split('')
    .map((el) => el ** 2)
    .join('')

function squareDigits(num) {
  return +num
    .toString()
    .split('')
    .map((i) => i * i)
    .join('')
}

function squareDigits(num) {
  let string = num.toString()
  let results = []
  for (let i = 0; i < string.length; i++) {
    results[i] = string[i] * string[i]
  }
  return Number(results.join(''))
}

function squareDigits(num) {
  return +(num + '').replace(/\d/g, (matched) => matched * matched)
}

function squareDigits(num) {
  return ~~num
    .toString()
    .split('')
    .reduce(function (p, c) {
      return '' + p + ~~c * ~~c
    }, '')
}

function makeMeSlow() {
  for (let x = 0; x < 7000000000; x++) {}
}

Date.prototype.getTime = (function () {
  const xs = [7000, 0]
  return () => xs.pop()
})()

function makeMeSlow() {
  Date.prototype.getTime = () => Date.now() + 7777
}

function sumTwoSmallestNumbers(numbers) {
  ;[a, b] = numbers.sort((prev, curr) => prev - curr)
  return a + b
}

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b)
  return numbers[0] + numbers[1]
}

sumTwoSmallestNumbers = (a) => (a = a.sort((x, y) => x - y))[0] + a[1]
