//new lesson | thursday
//remove disemvowel
//first
disemvowel = (str) => str.replace(/[aeiou]/gi, '')

//base
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '')
}

//||
function disemvowel(str) {
  return (str || '').replace(/[aeiou]/gi, '')
}

//with methods
const vowels = 'aeiou'
function disemvowel(str) {
  return str
    .split('')
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join('')
}

//cycle for
const disemvowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let newStr = ''
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i)
    if (vowels.indexOf(char) == -1) {
      newStr += char
    }
  }
  return newStr
}

//like
function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  return str
    .split('')
    .filter(function (el) {
      return vowels.indexOf(el.toLowerCase()) == -1
    })
    .join('')
}

//base
function disemvowel(str) {
  return str.replace(/[aeiouAEUIOU]/g, '')
}

//--------------------------------------------------------------------

//descending order task
//first
descendingOrder = (n) =>
  n === 0
    ? 0
    : +String(n)
        .split('')
        .sort((a, b) => b - a)
        .join('')

//good
function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''))
}

//like
function descendingOrder(n) {
  n = [...n.toString()]
  return Number(n.sort().reverse().join(''))
}

//one line
descendingOrder = (n) => +[...`${n}`].sort().reverse().join(``)
