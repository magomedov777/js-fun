//new lessons | friday
//Collatz Conjecture
//first
let hotpo = (n) => (n < 2 ? 0 : hotpo(n % 2 ? 3 * n + 1 : n / 2) + 1);

//base
const _hotpo = function (n, acc = 0) {
  if (n <= 1) {
    return acc;
  } else {
    return hotpo(n % 2 == 0 ? n / 2 : 3 * n + 1, acc + 1);
  }
};

//while
const hotpo_ = function (n) {
  const x = 0;
  while (n > 1) {
    x++;
    n = n % 2 ? n * 3 + 1 : n / 2;
  }
  return x;
};

//one line
const __hotpo = (n) => (n === 1 ? 0 : 1 + hotpo(n % 2 ? n * 3 + 1 : n / 2));

//cycle for
const __hotpo_ = function (n) {
  if (n == 0) return 0;
  for (let i = 0; i < 100; i++) {
    if (n == 1) {
      return i;
    } else if (n % 2 == 0) {
      n /= 2;
    } else {
      n = n * 3 + 1;
    }
  }
};

//-------------------------------------------------------------
//pick a set of rist element
//first
first = (arr, n = 1) => arr.slice(0, n);

//base
function first(arr, n) {
  return n === undefined ? arr.slice(0, 1) : arr.slice(0, n);
}

//cycle for
function first(arr, n) {
  if (n == undefined) return arr.slice(0, 1);
  if (n == 0) return [];
  let newArr = [];
  if (n <= arr.length) {
    for (let i = 0; i < n; i++) {
      newArr.push(arr[i]);
    }
    return newArr;
  }
  return arr;
}

//filter
first = (arr, n) => arr.filter((val, i) => i < (n == undefined ? 1 : n));

//good
function first(arr, n = 1) {
  return n ? arr.slice(0, n) : [];
}

//---------------------------------------------------------------------------------------------------
//Pythagorean triple
//first
const isPythagoreanTriple = (integers) => {
  const [x, y, z] = integers.sort((a, b) => a - b);
  return x ** 2 + y ** 2 == z ** 2;
};

//like
function isPythagoreanTriple([a, b, c], p = (a, b, c) => a * a + b * b == c * c) {
  return p(a, b, c) || p(a, c, b) || p(c, b, a);
}

//Math.abs
function isPythagoreanTriple(integers) {
  let [a, b, c] = integers.sort((x, y) => x - y);
  return Math.abs(Math.hypot(a, b) - c) <= 1e-6;
}

//---------------------------------------------------------------------------------------------------
//Find the Integral
//first
integrate = (coefficient, exponent) => coefficient / (exponent + 1) + "x^" + (exponent + 1);

//clever
integrate = (c, e) => `${c / (e += 1)}x^${e}`;

//good
integrate = (coefficient, exponent) => `${coefficient / ++exponent}x^${exponent}`;

//across variable
function integrate(coefficient, exponent) {
  const a = exponent + 1;
  const b = coefficient / a;
  return `${b}x^${a}`;
}
