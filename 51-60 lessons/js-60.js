//new lesson | wednesday
//ASCII Total
//first
function uniTotal(string) {
  return string
    .split("")
    .map((el) => el.charCodeAt(0))
    .reduce((a, b) => a + b, 0);
}

//one line
uniTotal = (string) =>
  string
    .split("")
    .map((el) => el.charCodeAt(0))
    .reduce((a, b) => a + b, 0);

//arr
uniTotal = (str) => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

//cycle for
function uniTotal(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count += str.charCodeAt(i);
  }
  return count;
}

//call
function uniTotal(string) {
  return Array.prototype.reduce.call(string, (a, c) => a + c.charCodeAt(0), 0);
}

//---------------------------------------------------------------
//true for all
//first
function all(arr, fun) {
  return arr.every(fun);
}

//one line
all = (arr, fun) => arr.every(fun);

//cycle for
function all(arr, fun) {
  let length = arr.length;

  for (let i = 0; i < length; ++i) if (!fun(arr[i])) return false;

  return true;
}

//call | bind
const all = Function.prototype.call.bind(Array.prototype.every);

//every
function all(arr, fun) {
  return arr.every((el) => fun(el));
}
