//new lesson | thirsday
//bug fixing
//first
function createArray(number) {
  var newArray = [];
  for (var counter = 1; counter <= number; ) {
    newArray.push(counter++);
  }
  return newArray;
}

//second
function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}

//third | smart
const createArray = (n) => Array(...Array(n)).map((v, i) => i + 1);

//good
function createArray(number) {
  return Array.from({ length: number }, (v, i) => i + 1);
}

//not bad
const createArray = (number) => [...Array(number)].map((_, idx) => ++idx);

//-----------------------------------------------------
//square
//first
square = (x) => x ** 2;

//base
function square(x) {
  return x ** 2;
}

//other
function square(num) {
  let num = Math.pow(num, 2);
  return num;
}

function square(num) {
  return num * num;
}
