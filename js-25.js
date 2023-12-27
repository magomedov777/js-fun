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
