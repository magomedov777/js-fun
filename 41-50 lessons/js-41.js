//new lessons | tuesday
//arr includes el
//first
include = (arr, item) => (arr.includes(item) ? true : false);

//declaration | base
function include(arr, item) {
  return arr.includes(item);
}

//indexOf
function include(arr, item) {
  return arr.indexOf(item) !== -1;
}

//good
const include = (a, i) => a.indexOf(i) > -1;

//like
function include(arr, item) {
  return Boolean(~arr.indexOf(item));
}

//some
function include(arr, item) {
  return arr.some((n) => n === item);
}

//hardcore
const include = Function.prototype.call.bind(Array.prototype.includes);

//-----------------------------------------------------------------

//find the remainder
//first
remainder = (n, m) => (n > m ? n % m : m % n);

//base
function remainder(a, b) {
  return a > b ? a % b : b % a;
}

//across variable
function remainder(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return min ? max % min : NaN;
}

//if/else
function remainder(a, b) {
  if (b > a) return b % a;
  else return a % b;
}

//like
function remainder(a, b) {
  return Math.max(a, b) % (Math.min(a, b) || NaN);
}
