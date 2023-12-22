//new lesson
//count odd numbers below n
//first
oddCount = (n) => Math.floor(n / 2);

function oddCount(n) {
  return Math.floor(n / 2);
}

//parseInt
function oddCount(n) {
  return parseInt(n / 2);
}

//across variable
function oddCount(n) {
  let odd = Math.round((n - 1) / 2);
  return odd;
}

//good
const oddCount = (n) => (n - (n % 2)) / 2;

//other
function oddCount(n) {
  return Math.trunc(n / 2);
}

//------------------------------------
//Sum the strings
//first
function sumStr(a, b) {
  let res = Number(a) + Number(b);
  return String(res);
}

//base
function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

function sumStr(a, b) {
  return +a + +b + "";
}
