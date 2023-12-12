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
