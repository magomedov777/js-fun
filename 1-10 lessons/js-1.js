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

const studentsList = [
  ["Andrew", "John", "Jack"],
  ["Ann", "Jenifer", "Elizabeth"],
  ["Alex", "Jason", "Will"],
]

for (let i = 0; i < studentsList.length; i++) {
  let studentsResult = studentsList[i]
  for (let j = 0; j < studentsResult.length; j++) {
    let newResult = studentsResult[j]
    document.write(newResult, "<br>")
  }
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

function sumMix(x) {
  let a = x.join("").split("")
  let sum = 0
  for (let i = 0; i < x.length; i++) {
    sum += parseInt(a[i])
  }
  return sum
}

function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      return arr[i]
    }
  }
  return null
}

function reverseSeq(n) {
  let res = []
  for (let i = n; i >= 1; i--) {
    res.push(i)
  }
  return res
}

function removeEveryOther(arr) {
  let newArray = []
  for (let i = 0; i < arr.length; i += 2) {
    newArray.push(arr[i])
  }
  return newArray
}

const removeEveryOther = (arr) => {
  return arr.filter(function (elem, index) {
    return index % 2 === 0
  })
}
