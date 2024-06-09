//new lesson | thursday
//credit card mask
//first
maskify = (cc) => cc.slice(-4).padStart(cc.length, '#')

//goood
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
}

//regEXP
function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#')
}

//regEXP
function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, '#')
}

//cycle for
function maskify(cc) {
  cc = cc.split('')
  for (let i = 0; i < cc.length - 4; i++) {
    cc[i] = '#'
  }
  cc = cc.join('')
  return cc
}

//like
maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4)

//---------------------------------------------------------------------------------
//get sum
//first
function getSum(a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return ((max - min + 1) * (min + max)) / 2
}

//very good
function GetSum(a, b) {
  return ((Math.abs(a - b) + 1) * (a + b)) / 2
}

//if/else
function GetSum(a, b) {
  if (a == b) return a
  else if (a < b) return a + GetSum(a + 1, b)
  else return a + GetSum(a - 1, b)
}

//clever
function GetSum(a, b) {
  tmp = 0
  if (a < b) while (a <= b) tmp += a++
  else while (a >= b) tmp += a--
  return tmp
}
