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

const findDifference = (a, b) =>
  Math.abs(a.reduce((prev, curr) => prev * curr) - b.reduce((prev, curr) => prev * curr));

function powersOfTwo(n) {
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr.push(2 ** i);
  }
  return arr;
}

const _testEvan = (n) => !(+n.toString(2).charAt(n.toString(2).length - 1) & 1);

String.prototype.toAlternatingCase = function () {
  new_str = "";
  for (let i = 0; i < this.length; i++) {
    if (this[i] === this[i].toUpperCase()) {
      new_str += this[i].toLowerCase();
    } else {
      new_str += this[i].toUpperCase();
    }
  }
  return new_str;
};

addLength = (str) => str.split(" ").map((el) => String(el + " " + el.length));

function addLength(str) {
  return str.split(" ").map((s) => `${s} ${s.length}`);
}

function tripleTrouble(one, two, three) {
  let res = [];
  for (let i = 0; i < one.length; i++) {
    res.push(one[i], two[i], three[i]);
  }
  return res.join("");
}

const tripleTrouble = (one, two, three) =>
  one
    .split("")
    .map((letter, index) => letter + two[index] + three[index])
    .join("");

function mergeArrays(arr1, arr2) {
  let newArray = [];
  newArray = newArray.concat(arr1);
  for (let i = 0; i < arr2.length; i++) {
    if (newArray.indexOf(arr2[i]) === -1) {
      newArray.push(arr2[i]);
    }
  }
  return newArray.sort(function (a, b) {
    return a - b;
  });
}

function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

function generateRange(min, max, step) {
  let arr = [];
  while (min <= max) {
    arr.push(min);
    min += step;
  }
  return arr;
}

function replace(s) {
  let a = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (a.includes(arr[i])) {
      arr[i] = "!";
    }
  }
  return arr.join("");
}

replace = (s) => s.replace(/[aeiouAEIOU]/g, "!");

function replace(s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (s[i] == vowels[j]) {
        s = s.replaceAll(vowels[j], "!");
      }
    }
  }
  return s;
}

function arrayMadness(a, b) {
  return a.reduce((sum, el) => sum + el ** 2, 0) > b.reduce((sum, el) => sum + el ** 3, 0);
}

function arrayMadness(a, b) {
  let x = a.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
  let y = b.reduce((acc, curr) => acc + Math.pow(curr, 3), 0);
  if (x > y) {
    return true;
  }
  return false;
}

findAverage = (nums) => nums.reduce((acc, curr) => acc + curr, 0) / nums.length;

const findAverage = function (nums) {
  let sum = 0;
  for (n in nums) {
    sum += nums[n];
  }
  return sum / nums.length;
};

function findAverage(nums) {
  let sum = 0;
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    index++;
  }
  return index >= 1 ? sum / index : sum;
}
