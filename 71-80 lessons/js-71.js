//new lesson | sunday
//day in the year
//first
function yearDays(year) {
  if (year % 4 !== 0) {
    return `${year} has 365 days`
  } else if (year % 100 !== 0) {
    return `${year} has 366 days`
  } else if (year % 400 !== 0) {
    return `${year} has 365 days`
  } else {
    return `${year} has 366 days`
  }
}

//good | ternary
function yearDays(year) {
  return (
    year +
    ' has ' +
    ((!(year % 100) && year % 400) || year % 4 ? '365' : '366') +
    ' days'
  )
}

//like | ternary & interpolation
function yearDays(year) {
  let nDays = year % 4 ? 365 : year % 100 ? 366 : year % 400 ? 365 : 366
  return `${year} has ${nDays} days`
}

//step by step | accross variables
function yearDays(year) {
  const isCentury = year % 100 === 0
  const isLeap = year % (isCentury ? 400 : 4) === 0
  const days = isLeap ? 366 : 365
  return `${year} has ${days} days`
}
