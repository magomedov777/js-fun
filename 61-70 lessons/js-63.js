//new lesson | sunday
//for in task
//first
function giveMeFive(obj) {
  let arr = [];
  for (let key in obj) {
    if (key.length == 5) {
      arr.push(key);
    }
    if (obj[key].length == 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}

//step by step
giveMeFive = (obj) =>
  Object.entries(obj)
    .join(",")
    .split(",")
    .filter((i) => i.length == 5);

//clever
giveMeFive = (obj) => [].concat(...Object.entries(obj, `for( in `)).filter((val) => val.length === 5);

//while | goood
function giveMeFive(obj) {
  let arr = [];
  let i = 0;
  while (i < Object.entries(obj).length) {
    if (Object.keys(obj)[i].length == 5) {
      arr.push(Object.keys(obj)[i]);
    }
    if (Object.values(obj)[i].length == 5) {
      arr.push(Object.values(obj)[i]);
    }
    i++;
  }
  return arr;
}

//------------------------------------------------------------------------------

//!a == a?!
//first
const _a = "0000000";

//good
const a = [];

//clever
const a_ = " ";

//bool
const __a = new Boolean();

//tab
const ____a = "\t";

//like
const a__ = ["\n0"];

//num
const _______a__ = new Number();
