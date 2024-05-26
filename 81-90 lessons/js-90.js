//new lesson | thursday
//get the middle character
//first
getMiddle = (s) => s.slice((s.length - 1) / 2, s.length / 2 + 1)

//Math.ceil
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1)
}

//Math.floor | charAt
function getMiddle(s) {
  let middle = s.length / 2
  return s.length % 2 ? s.charAt(Math.floor(middle)) : s.slice(middle - 1, middle + 1)
}

//good | ternary
function getMiddle(s) {
  let middle = Math.floor(s.length / 2)
  return s.length % 2 === 0 ? s.slice(middle - 1, middle + 1) : s.slice(middle, middle + 1)
}

//like
function getMiddle(s) {
  return s.substring(Math.ceil(s.length / 2) - 1, Math.floor(s.length / 2) + 1)
}

//top | clever
getMiddle = (s) => s.substr((s.length - 1) >>> 1, (~s.length & 1) + 1)

//charAt
function getMiddle(s) {
  return s.length % 2 == 0
    ? s.charAt((s.length - 1) / 2) + s.charAt((s.length + 1) / 2)
    : s.charAt(s.length / 2)
}

//----------------------------------------------------------------------------------
//jaden case string
//first
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(' ')
}

//good
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

//regEXP
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function (x) {
    return x.toUpperCase()
  })
}

//like
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((i) => i.replace(i[0], i[0].toUpperCase()))
    .join(' ')
}

//cycle for
String.prototype.toJadenCase = function () {
  let words = this.split(' ')
  for (let i = 0, wordsLen = words.length; i < wordsLen; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1)
  }
  return words.join(' ')
}

//recursion
String.prototype.toJadenCase = function () {
  return this.replace(/(?:^|\s)\S/g, function (c) {
    return c.toUpperCase()
  })
}
