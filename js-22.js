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

//other
const powersOfTwo = (n) => [1].concat([...Array(n)].map((_, i) => 2 ** (i + 1)));

//---------------------------------------------------------------------------
//What is between
//first
function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

//good | short
const between = (a, b) => Array.from(new Array(b - a + 1), (_, i) => a + i);

//for cycle
function between(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  for (let i = min, arr = []; i <= max; arr.push(i++));
  return arr;
}

//cycle while
function between(a, b) {
  let c = [];
  while (a <= b) {
    c.push(a);
    a++;
  }
  return c;
}
