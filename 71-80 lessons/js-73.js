//new lesson | wednesday
//sorted arr
//first
function sorter(textbooks) {
  return textbooks.sort((a, b) => {
    const lowerA = a.toLowerCase()
    const lowerB = b.toLowerCase()
    if (lowerA < lowerB) {
      return -1
    }
    if (lowerA > lowerB) {
      return 1
    }
    return lowerA.localeCompare(lowerB)
  })
}

//base | ternary
function sorter(textbooks) {
  return textbooks.sort((a, b) =>
    a.toLowerCase() > b.toLowerCase()
      ? 1
      : a.toLowerCase() < b.toLowerCase()
      ? -1
      : 0
  )
}

//like | best
function sorter(textbooks) {
  return [...textbooks].sort((a, b) => {
    a = a.toLowerCase()
    b = b.toLowerCase()
    return (a > b) - (a < b)
  })
}

//cycle for in for
function sorter(textbooks) {
  let item = textbooks[0]
  for (let i = 0; i < textbooks.length - 1; i++) {
    for (let j = i + 1; j < textbooks.length; j++) {
      if (textbooks[i].toLowerCase() > textbooks[j].toLowerCase()) {
        item = textbooks[i]
        textbooks[i] = textbooks[j]
        textbooks[j] = item
      }
    }
  }
  return textbooks
}

//---------------------------------------------------------------------

//generate user links
//first
function generateLink(user) {
  const baseURL = 'http://www.codewars.com/users/'
  return `${baseURL}${encodeURIComponent(user)}`
}

//base
function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`
}

//one line
generateLink = (user) =>
  `http://www.codewars.com/users/${encodeURIComponent(user)}`

//fun | cycle for + for in
function generateLink(user) {
  let url = 'http://www.codewars.com/users/'
  let Obj = {
    ' ': '%20',
    ';': '%3B',
    '`': '%60',
    '"': '%22',
    '/': '%2F',
    '+': '%2B',
    ',': '%2C',
    '^': '%5E',
    '|': '%7C',
    '?': '%3F',
    '#': '%23',
    $: '%24',
    '&': '%26',
    '}': '%7D',
    ':': '%3A',
    '{': '%7B',
    ']': '%5D',
    '[': '%5B',
    '@': '%40',
    '<': '%3C',
    '>': '%3E',
  }
  user = user.replace(/%/g, '%25')
  for (let i = 0; i < user.length; i++) {
    for (let key in Obj) {
      if (user[i] == key) {
        user = user.replace(user[i], Obj[key])
      }
    }
  }
  return url + user
}

//across variable
function generateLink(user) {
  let link = 'http://www.codewars.com/users/'
  const value = encodeURIComponent(user)
  return link + value
}
