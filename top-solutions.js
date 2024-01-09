function longestSlideDown(pyramid) {
  for (let i = pyramid.length - 2; i > -1; i--) {
    for (let j = 0; j < pyramid[i].length; j++) {
      pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
    }
  }
  return pyramid[0][0];
}

function longestSlideDown(pyramid) {
  pyramid = pyramid.slice(0);
  let i = pyramid.length - 1;
  while (i--) for (let j = 0; j <= i; ++j) pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
  return pyramid[0][0];
}

function longestSlideDown(pyramid) {
  for (let idx = 0, len = pyramid.length; idx < pyramid.length; idx++) {
    pyramid[idx].unshift(0);
    pyramid[idx].push(0);
  }
  for (let idx = 1, plen = pyramid.length; idx < plen; idx++) {
    for (let rdx = 0, rlen = pyramid[idx].length; rdx < rlen; rdx++) {
      if (pyramid[idx - 1][rdx - 1] >= pyramid[idx - 1][rdx]) {
        pyramid[idx][rdx] = pyramid[idx][rdx] + pyramid[idx - 1][rdx - 1];
      } else if (pyramid[idx - 1][rdx - 1] <= pyramid[idx - 1][rdx]) {
        pyramid[idx][rdx] = pyramid[idx][rdx] + pyramid[idx - 1][rdx];
      }
    }
  }
  return pyramid[pyramid.length - 1].sort((a, b) => b - a)[0];
}

sumStrings = (x, y) => (isNaN(parseInt(x)) ? y : isNaN(parseInt(y)) ? x : String(BigInt(x) + BigInt(y)));

function sumStrings(a, b) {
  var res = "",
    c = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || c) {
    c = +(a.length > 0 ? a.pop() : 0) + +(b.length > 0 ? b.pop() : 0) + c;
    res = (c % 10).toString() + res;
    c = Math.floor(c / 10);
  }
  res = res.replace(/^[0]*/g, "");
  return res;
}

function findMultiples(integer, limit) {
  let arr = [];
  for (let i = 1; i <= limit; i++) {
    if (i % integer === 0) {
      arr.push(i);
    }
  }
  return arr;
}

function noBoringZeros(x) {
  let a = `${x}`.split("");
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] == 0) {
      a.pop();
    } else {
      break;
    }
  }
  return Number(a.join(""));
}

noBoringZeros = (n) => +String(n).replace(/0*$/, "");

function unusualFive() {
  return ~(~(~false ^ ((true << true) << true) ^ ~false) ^ true);
}

const unusualFive = () => Math.hypot(Math.ceil(Math.PI), Math.floor(Math.PI));

String.prototype.isUpperCase = function () {
  return this.split("").every((el) => el === el.toUpperCase());
};
