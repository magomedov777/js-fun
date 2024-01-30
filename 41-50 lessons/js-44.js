//new lesson | Monday
//include or no
//first
spEng = (sentence) => sentence.toLowerCase().includes("english");

//clever
function spEng(s) {
  return /english/i.test(s);
}

//one line
const spEng = (sentence) => /english/i.test(sentence);

//like
function spEng(s) {
  return s.toLowerCase().indexOf("english") != -1;
}

//interesting
function spEng(sentence) {
  let pro = "english";
  let lcs = sentence.toLowerCase();
  let j = 0;
  for (let i in lcs) {
    if (lcs[i] == pro[j]) {
      j++;
    }
  }
  return j == pro.length;
}

//with match
function spEng(sentence) {
  return sentence.match(/english/gi) !== null;
}

//-------------------------------------------------------

//sum of differences in array
//first
function sumOfDifferences(arr) {
  let x = arr.slice().sort((a, b) => a - b);
  let sum = 0;
  for (let i = 1; i < x.length; i++) {
    sum += x[i] - x[i - 1];
  }
  return sum;
}

//Math.min - Math.max
function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

//gooooood
const sumOfDifferences = (arr) =>
  arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)
    .reduce((a, b) => a + b, 0);

//clever
const sumOfDifferences = (arr) => arr.sort((a, b) => b - a).shift() - arr.pop() || 0;

//---------------------------------------------------------------
//sum of multiples
//first
function sumMul(n, m) {
  if (n >= m) {
    return "INVALID";
  }
  let res = 0;
  for (let i = n; i < m; i += n) {
    res += i;
  }
  return res;
}

//smart
function sumMul(n, m) {
  if (n <= 0 || m <= 0) return "INVALID";
  const last = Math.ceil(m / n) * n - n;
  return ((last + n) * (last / n)) / 2;
}

//unreal
const sumMul = (n, m) =>
  m > n ? [...Array((m / n) ^ 0)].map((_, idx) => ++idx * n).reduce((pre, val) => pre + val * (val < m)) : `INVALID`;

//good
const sumMul = (n, m) =>
  m <= 0 ? "INVALID" : Array.from({ length: m }).reduce((acc, _, index) => (index % n === 0 ? acc + index : acc), 0);
