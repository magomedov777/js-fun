const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < newArray.length; i++) {
  console.log(i)
}

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i < newArray.length; i++) {
  let arr = newArr.reverse()
  console.log(arr)
  break
}

function stringToArray(string) {
  let newStr = ""
  let result = []
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      newStr = newStr + string[i]
    } else {
      result.push(newStr)
      newStr = ""
    }
  }
  result.push(newStr)
  return result
}

function stringToArray(string) {
  let array = []
  let temp = ""
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      temp += string[i]
    } else {
      array.push(temp)
      temp = ""
    }
  }
  array.push(temp)
  return array
}
