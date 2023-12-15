//new lesson, thursday
//Area or perimetr

//first
areaOrPerimeter = (l, w) => (l !== w ? (l + w) * 2 : l * w)

//if/else
function areaOrPerimeter(l, w) {
  if (l !== w) {
    return (l + w) * 2
  }
  return l * w
}

//base
const areaOrPerimeter = function (l, w) {
  let area = l * w
  let perimeter = (l + w) * 2
  return l === w ? area : perimeter
}

//--------------------------------------

//easy
//first
greet = (name, owner) => (name === owner ? "Hello boss" : "Hello guest")

//other
function greet(name, owner) {
  return `Hello ${name == owner ? "boss" : "guest"}`
}

//if/else
function greet(name, owner) {
  if (name === owner) {
    return "Hello boss"
  }
  return "Hello guest"
}

//new task
//first
const feast = (beast, dish) => {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  )
}
