//new lesson
//calculate BMI
function bmi(weight, height) {
  let bmi = weight / height ** 2
  if (bmi <= 18.5) return "Underweight"
  if (bmi <= 25.0) return "Normal"
  if (bmi <= 30.0) return "Overweight"
  if (bmi > 30) return "Obese"
}

//new solution
const bmi = (w, h, bmi = w / h / h) =>
  bmi <= 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese"

//switch case
function bmi(weight, height) {
  var formula = weight / Math.pow(height, 2)
  switch (true) {
    case formula <= 18.5:
      return "Underweight"
    case formula <= 25.0:
      return "Normal"
    case formula <= 30:
      return "Overweight"
    default:
      return "Obese"
  }
}

//reduce task
grow = (x) => x.reduce((a, b) => a * b)

//with cycle for
const grow = (x) => {
  let res = 1
  for (let i = 0; i < x.length; i++) {
    res *= x[i]
  }
  return res
}

//-------------------------------
function grow(x) {
  let counter = x[0]
  for (let i = 1; i < x.length; i++) {
    counter = counter * x[i]
  }
  return counter
}

//new task | hero func
hero = (bullets, dragons) => (bullets >= dragons * 2 ? true : false)

function hero(bullets, dragons) {
  //base
  return bullets >= dragons * 2
}

//if/else
hero = (bullets, dragons) => {
  if (bullets / 2 >= dragons) {
    return true
  } else {
    return false
  }
}

//like
function hero(bullets, dragons) {
  return bullets / dragons >= 2
}

//--------------------------------------
//Sentence Smash
function smash(words) {
  return words.join(" ")
}

smash = (words) => words.join(" ")

//for
function smash(words) {
  let res = ""
  for (let i of words) {
    res += i.concat(" ")
  }
  return res.trim()
}
