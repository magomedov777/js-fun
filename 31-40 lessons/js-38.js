//new lessons
//first task | theatre
//first
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}

//base | with variable
function seatsInTheater(nCols, nRows, col, row) {
  let totalObstructedRows = nRows - row;
  let totalObstructedCols = nCols - (col - 1);
  return totalObstructedRows * totalObstructedCols;
}

//one line
seatsInTheater = (a, b, c, d) => (a - c + 1) * (b - d);

//if/else
function seatsInTheater(nCols, nRows, col, row) {
  let outPut = 0;
  if (1 <= nCols >= 1000) {
    return nRows - row;
  } else if (1 <= nRows >= 1000) {
    return nRows - row;
  } else if (1 <= col >= nCols) {
    return nRows - row;
  } else if (1 <= row >= nRows) {
    return nRows - row;
  } else {
    let a = col - 1;
    let b = a * nRows;
    let c = row * nCols;
    let d = a * row;
    let result = b + c - d;
    let allPeople = nCols * nRows;
  }
  return allPeople - result;
}

//---------------------------------------------------------
//multiple of index
//first
const multipleOfIndex = (array) => array.filter((el, index) => el % index == 0 || el === 0);

//base
function multipleOfIndex(array) {
  return array.filter((x, i) => x == 0 || x % i === 0);
}

//normal
function multipleOfIndex(array) {
  return array.filter((val, i) => val % i == 0 || (val == 0 && i == 0));
}

//cycle for
function multipleOfIndex(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % i === 0 || array[i] === 0) {
      result.push(array[i]);
    }
  }
  return result;
}
