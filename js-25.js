//new lesson | tuesday
//To square or not to square
//first
squareOrSquareRoot = (array) => array.map((el) => (Math.sqrt(el) % 1 ? el * el : Math.sqrt(el)));

//base
function squareOrSquareRoot(array) {
  return array.map((x) => {
    const r = Math.sqrt(x);
    return r % 1 == 0 ? r : x * x;
  });
}

//good
const squareOrSquareRoot = (array) => array.map((a) => (Math.sqrt(a) % 1 === 0 ? Math.sqrt(a) : a * a));

//other
function squareOrSquareRoot(array) {
  return array.map((e) => (Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e * e));
}

//cycle for
function squareOrSquareRoot(array) {
  let processed = [];
  for (let i = 0; i < array.length; i++) {
    let number = array[i];
    if (Math.sqrt(number) == Math.floor(Math.sqrt(number))) {
      processed.push(Math.sqrt(number));
    } else {
      processed.push(number * number);
    }
  }
  return processed;
}

function squareOrSquareRoot(array) {
  let arr = array;
  for (i = 0; i < array.length; i++) {
    if (Number.isInteger(Math.sqrt(arr[i]))) {
      arr[i] = Math.sqrt(arr[i]);
    } else {
      arr[i] = arr[i] * arr[i];
    }
  }
  return arr;
}

//good
function squareOrSquareRoot(array) {
  return array.map((val) => (Number.isInteger(Math.sqrt(val)) ? Math.sqrt(val) : Math.pow(val, 2)));
}

//-------------------------------------------------------
//Max sum
//first
expressionMatter = (a, b, c) => Math.max(a + b + c, a * b * c, a * (b + c), (a + b) * c);

//base
function expressionMatter(a, b, c) {
  return Math.max(a + b + c, a * b * c, a * (b + c), (a + b) * c, a + b * c, a * b + c);
}

//interested
function expressionMatter(a, b, c) {
  let arr = [];
  arr.push(a + b + c);
  arr.push(a * b * c);
  arr.push(a + b * c);
  arr.push(a * b + c);
  arr.push((a + b) * c);
  arr.push(a * (b + c));
  return arr.reduce((a, b) => Math.max(a, b));
}

//other
function expressionMatter(a, b, c) {
  if (a == 1 && c == 1) return a + b + c;
  if (a != 1 && b != 1 && c != 1) {
    return a * b * c;
  }
  return a < c ? (a + b) * c : a * (b + c);
}
