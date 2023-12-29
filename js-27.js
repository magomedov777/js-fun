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
