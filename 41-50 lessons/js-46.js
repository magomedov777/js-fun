//new lesson | wednesday
//highest and lowest
//first
function highAndLow(numbers) {
  let x = numbers.split(" ");
  let maxVal = Math.max(...x);
  let minVal = Math.min(...x);
  return `${maxVal} ${minVal}`;
}

//base
function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

//clever
function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}

//good
function highAndLow(numbers) {
  let arr = numbers.split(" ").map(Number);
  return Math.max(...arr) + " " + Math.min(...arr);
}

//good
function highAndLow(numbers) {
  let arr = numbers.split(" ").sort(function (a, b) {
    return a - b;
  });
  return arr[arr.length - 1] + " " + arr[0];
}

//like
function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  return `${max} ${min}`;
}

//reduce
function highAndLow(numbers) {
  let arr = numbers.split(" ").map((x) => parseInt(x));
  let max = arr.reduce((p, c) => (p > c ? p : c));
  let min = arr.reduce((p, c) => (p < c ? p : c));
  return max + " " + min;
}

//one line
highAndLow = (numbers) => `${Math.max(...numbers.split(" "))} ${Math.min(...numbers.split(" "))}`;

//-----------------------------------------------------------------------
//square area
//first
squareArea = (a) => Math.pow((2 * a) / Math.PI, 2);

//step by step
function squareArea(A) {
  let circum = 4 * A;
  let radius = circum / (2 * Math.PI);
  let area = Math.pow(radius, 2);
  return Math.round(area * 100) / 100;
}

//smart
squareArea = (A) => +Math.pow((2 * A) / 3.1416, 2).toFixed(2);

//good
function squareArea(A) {
  return Math.round(Math.pow((A * 2) / Math.PI, 2) * 100) / 100;
}
