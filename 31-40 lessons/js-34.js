//new lesson | wednesday
//Merged two sorted arrays
//first
function mergeArrays(arr1, arr2) {
  let unionArray = arr1.concat(arr2);
  if (arr1.length === 0) {
    return arr2.slice().sort((a, b) => a - b);
  } else if (arr2.length === 0) {
    return arr1.slice().sort((a, b) => a - b);
  } else {
    return unionArray.sort((a, b) => a - b).filter((i, index, el) => el.indexOf(i) === index);
  }
}

//very good
function mergeArrays(arr1, arr2) {
  return Array.from(new Set(arr1.concat(arr2).sort((a, b) => a - b)));
}

//good
function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a, b) => a - b);
}

//like
function mergeArrays(arr1, arr2) {
  return arr1
    .filter((item) => !arr2.includes(item))
    .concat(arr2)
    .sort((a, b) => a - b);
}

//includes
function mergeArrays(arr1, arr2) {
  let res = [];
  arr1.concat(arr2).forEach((el) => (!res.includes(el) ? res.push(el) : 0));
  return res.sort((a, b) => a - b);
}

//cycle for
function mergeArrays(arr1, arr2) {
  let newArray = [];
  newArray = newArray.concat(arr1);
  for (let i = 0; i < arr2.length; i++) {
    if (newArray.indexOf(arr2[i]) === -1) {
      newArray.push(arr2[i]);
    }
  }
  return newArray.sort(function (a, b) {
    return a - b;
  });
}

//not bad
function mergeArrays(arr1, arr2) {
  if (arr1.length == 0 && arr2.length == 0) {
    return [];
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      arr1.push(arr2[i]);
    }
  }
  return arr1.sort((a, b) => a - b);
}

//---------------------------------------------
