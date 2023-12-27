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
