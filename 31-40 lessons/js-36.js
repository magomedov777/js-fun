//new lesson | sunday
//first task | Generate range of integers
//first, cycle for
function generateRange(min, max, step) {
  let arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}

//cycle while
function generateRange(min, max, step) {
  let arr = [];
  while (min <= max) {
    arr.push(min);
    min += step;
  }
  return arr;
}

//for
function generateRange(min, max, step) {
  for (let res = []; min <= max; min += step) res.push(min);
  return res;
}

//spread | clever
function generateRange(min, max, step) {
  return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}

//Array.from
function generateRange(min, max, step) {
  return Array.from({ length: 1 + (max - min) / step }, (_, i) => min + i * step);
}

//-------------------------------------------
//second task | replace | easy
//first
replace = (s) => s.replace(/[aeiouAEIOU]/g, "!");

//base
function replace(s) {
  return s.replace(/[aeoiu]/gi, "!");
}

//arr methods | step by step
const replace = (w) =>
  w
    .split("")
    .map((e) => ("aeiou".includes(e.toLowerCase()) ? "!" : e))
    .join("");

//cycle for
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

//for into for
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

//--------------------------------------------------------
//hex to dec
//first
hexToDec = (hexString) => parseInt(hexString, 16);

//base
function hexToDec(hexString) {
  return parseInt(hexString, 16);
}

//--------------------------------------------------------
//replace dots
//first
replaceDots = (str) => str.replace(/[.]/gi, "-");

//base
var replaceDots = function (str) {
  return str.replace(/\./g, "-");
};

//array methods
var replaceDots = (s) => s.split(".").join("-");

//replaceAll
const replaceDots = function (str) {
  return str.replaceAll(".", "-");
};

//cycle for
var replaceDots = function (str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    answer += str[i] !== "." ? str[i] : "-";
  }
  return answer;
};
