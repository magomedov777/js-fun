//new lessons | friday
//for | break -- continue
//first
function grabDoll(dolls) {
  let bag = []
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
      bag.push(dolls[i])
    } else {
      continue
    }
    if (bag.length === 3) break
  }
  return bag
}

//for of
function grabDoll(dolls) {
  let bag = [],
    doll
  for (doll of dolls) {
    if (doll == 'Hello Kitty' || doll == 'Barbie doll') bag.push(doll)
    else continue
    if (bag.length > 2) break
  }
  return bag
}

//for in
function grabDoll(dolls) {
  let bag = []
  for (d in dolls) {
    if (dolls[d] == 'Hello Kitty' || dolls[d] == 'Barbie doll')
      bag.push(dolls[d])
    if (bag.length < 3) continue
    break
  }
  return bag
}

//like
grabDoll = (dolls) =>
  dolls
    .filter((element) => element == 'Hello Kitty' || element == 'Barbie doll')
    .slice(0, 3)

//----------------------------------------------------------------------------
//type validation
//first
typeValidation = (variable, type) => typeof variable === type

//base
function typeValidation(variable, type) {
  return typeof variable === type
}

//if/else
function typeValidation(variable, type) {
  if (typeof variable === 'number' && type === 'number') {
    return true
  } else if (typeof variable === 'undefined' && type === 'undefined') {
    return true
  } else if (typeof variable === 'string' && type === 'string') {
    return true
  } else if (typeof variable === 'boolean' && type === 'boolean') {
    return true
  } else if (typeof variable === 'object' && type === 'object') {
    return true
  }
  return false
}
