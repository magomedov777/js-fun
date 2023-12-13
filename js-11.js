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

//with while
function countBy(x, n) {
  let result = []
  let count = 0
  let num = x

  while (count < n) {
    result.push(num)
    num += x
    count++
  }

  return result
}

//reversed words
reverseWords = (str) => str.split(" ").reverse().join(" ")

//with cycle for
function reverseWords(str) {
  let reverse = []
  let words = str.split(" ")
  for (let i = words.length - 1; i >= 0; i--) {
    reverse.push(words[i])
  }
  return reverse.join(" ")
}

//step by step | accros variable
function reverseWords(str) {
  let spl = str.split(" ")
  let rvr = spl.reverse()
  let resArr = rvr.join(" ")
  return resArr
}

//------------------------------------

//greet func
greet = (name) => (name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`)

//base
function greet(name) {
  return "Hello, " + (name == "Johnny" ? "my love" : name) + "!"
}

function greet(name) {
  if (name === "Johnny") return "Hello, my love!"
  return "Hello, " + name + "!"
}

//---------------------------------------------
//new func | count sheep
function countSheep(num) {
  let str = ""
  for (let i = 1; i <= num; i++) {
    str += i + " sheep..."
  }
  return str
}

//smart
//1
countSheep = (n) => [...Array(n).keys()].map((x) => `${x + 1} sheep...`).join``

//2
const countSheep = (length) =>
  Array.from({ length }, (_, i) => ++i + " sheep...").join("")

//find min & max values of array
//first
min = (list) => Math.min(...list)
max = (list) => Math.max(...list)

//func declaration
const min = function (list) {
  list.sort((a, b) => a - b)
  return list[0]
}

const max = function (list) {
  list.sort((a, b) => b - a)
  return list[0]
}

//with sort
let minN = (list) => list.sort((a, b) => a - b)[0]

let maxX = (list) => list.sort((a, b) => b - a)[0]
