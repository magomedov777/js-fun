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
