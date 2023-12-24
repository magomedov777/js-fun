//saturday lesson
//first task | powersOfTwo
//first
function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(2 ** i);
  }
  return arr;
}

//base
function powersOfTwo(n) {
  let result = [];
  for (var i = 0; i <= n; i++) {
    result.push(Math.pow(2, i));
  }
  return result;
}

//good
function powersOfTwo(n) {
  return Array.from({ length: n + 1 }, (v, k) => 2 ** k);
}

//best solution
const powersOfTwo = (n) =>
  Array(n + 1)
    .fill(2)
    .map((e, i) => e ** i);

//do/while | not bad
function powersOfTwo(n) {
  let res = [];
  do {
    res.unshift(Math.pow(2, n));
  } while (n--);
  return res;
}
