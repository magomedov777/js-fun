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
