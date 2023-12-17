//new lesson | saturday
//new tasks
//first solution
take = (arr, n) => arr.slice(0, n)

function take(arr, n) {
  //base
  return arr.slice(0, n)
}

//ternary
function take(arr, n) {
  return arr.length < n ? arr.slice() : arr.slice(0, n)
}

//with filter
function take(arr, n) {
  return arr.filter((elem, i) => i < n)
}

//with cycle for
function take(arr, n) {
  let counter = 0
  let res = []
  for (let i of arr) {
    counter += 1
    if (counter <= n && counter <= arr.length) {
      res.push(i)
    }
  }
  return res
}

//with cycle while
function take(arr, n) {
  let res = []
  let i = 0
  while (i < n && i < arr.length) {
    res.push(arr[i])
    i++
  }
  return res
}

//------------------------------------------

function doubleChar(str) {
  return str
    .split("")
    .map((el) => el + el)
    .join("")
}
