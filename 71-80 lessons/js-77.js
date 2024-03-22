//new lesson | wednesday
//arrow damaged task
//first
anyArrows = (arrows) => arrows.some((el) => !el.damaged)

//base
function anyArrows(arrows) {
  return arrows.some((a) => !a.damaged)
}

//obj
function anyArrows(arrows) {
  return arrows.some(({ damaged }) => !damaged)
}

//ternary
function anyArrows(arrows) {
  return arrows.some((obj) => (obj.damaged ? false : true))
}

//filter
function anyArrows(arrows, damaged = false) {
  const arrowsDamaged = arrows.filter((arrow) => arrow.damaged)
  return arrowsDamaged.length < arrows.length
}

//good
const anyArrows = (arrows) =>
  arrows.some((arrow) => (arrow.range > 0 && !arrow.damaged) || !arrow.damaged)

//false | undefined
function anyArrows(arrows) {
  return arrows.some((el) => el.damaged == undefined || el.damaged == false)
}

//-----------------------------------------------------------------------------------
//index el of arr
//first
let find = (x, y) => (x.indexOf(y) >= 0 ? x.indexOf(y) : 'Not found')

//like | includes
find = (a, e) => (a.includes(e) ? a.indexOf(e) : 'Not found')

//clever
find = (a, x) => ((x = a.indexOf(x)) < 0 ? 'Not found' : x)

//gooood
find = (a, e) => {
  const i = a.indexOf(e)
  return i < 0 ? 'Not found' : i
}

//normal
find = (a, e) => (a.indexOf(e) > -1 ? a.indexOf(e) : 'Not found')
