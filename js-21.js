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

//with variable
function sumStr(a, b) {
  const num1 = Number(a);
  const num2 = Number(b);
  return String(num1 + num2);
}

//smart
//1
function sumStr(a, b) {
  return ((parseInt(a) || 0) + (parseInt(b) || 0)).toString();
}
//2
const sumStr = (a, b) => 1 * a + 1 * b + "";

//if/else
function sumStr(a, b) {
  if (a === "" && b === "") {
    return "0";
  }
  if (b === "") {
    return a;
  }
  if (a === "") {
    return b;
  }
  return (parseInt(a) + parseInt(b)).toString();
}

//with reduce
function sumStr(...strings) {
  return String(strings.reduce((a, b) => a + (+b || 0), 0));
}
