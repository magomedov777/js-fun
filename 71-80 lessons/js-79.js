//new lesson | monday
//period late
//first
periodIsLate = (last, today, cycleLength) =>
  (today.getTime() - last.getTime()) / 86400000 > cycleLength

//base
function periodIsLate(last, today, cycleLength) {
  return (today - last) / 86400000 > cycleLength
}

//good
function periodIsLate(last, today, cycleLength) {
  const day = 24 * 60 * 60 * 1000
  return (today - last) / day > cycleLength
}

//step by step | across variable
function periodIsLate(last, today, cycleLength) {
  const oneDay = 1000 * 60 * 60 * 24
  const differenceInMs = today.getTime() - last.getTime()
  const differenceInDays = Math.round(differenceInMs / oneDay)
  return differenceInDays > cycleLength ? true : false
}

//Math.abs
function periodIsLate(last, today, cycleLength) {
  return (
    Math.abs(last.getTime() - today.getTime()) / (1000 * 60 * 60 * 24) >
    cycleLength
  )
}

//---------------------------------------------------------------------------------
//whats up next
//first
function nextItem(xs, item) {
  let fin = false
  for (let a of xs) {
    if (fin) return a
    if (a === item) fin = true
  }
}

//undefined
function nextItem(xs, item) {
  let found = false
  for (let x of xs) {
    if (found) return x
    if (x == item) found = true
  }
  return undefined
}

//clever | symbol iterator
const nextItem = (xs, item) => {
  const iter = xs[Symbol.iterator]()
  for (let el of iter) {
    if (el === item) return iter.next().value
  }
}
