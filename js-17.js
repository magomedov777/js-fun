//new lesson
//first task
function moveZeros(arr) {
  let withoutZeros = []
  let zeros = []
  for (let num of arr) {
    if (num !== 0) {
      withoutZeros.push(num)
    } else {
      zeros.push(num)
    }
  }
  return withoutZeros.concat(zeros)
}
