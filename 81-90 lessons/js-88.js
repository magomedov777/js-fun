//new lesson | thursday
//mumbling
//first
accum = (s) =>
  s
    .split('')
    .map((el, i) => el.toUpperCase() + el.toLowerCase().repeat(i))
    .join('-')

//like
function accum(s) {
  return s
    .split('')
    .map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase()))
    .join('-')
}

//cycle for
function accum(str) {
  let letters = str.split('')
  let result = []
  for (let i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()))
  }
  return result.join('-')
}

//good
function accum(s) {
  return [...s]
    .map((element, index) => {
      return element.toUpperCase() + element.toLowerCase().repeat(index)
    })
    .join('-')
}

//for in for
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

//for | charAt
function accum(s) {
  let array = []
  for (i = 0; i < s.length; i++) {
    array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i))
  }
  return array.join('-')
}
