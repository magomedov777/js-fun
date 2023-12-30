//new lesson | friday
//easy debug task | fundamentals
//first
function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}

checkAlive = (health) => (health <= 0 ? false : true);

//base
function checkAlive(health) {
  return health > 0;
}

//base | ternary
const checkAlive = (health) => health > 0;

//-------------------------------------
//strings
//first
stringy = (size) => ``.padStart(size, 10);

//cycle for
function stringy(size) {
  let str = "";
  for (let i = 1; i <= size; i++) str += i % 2;
  return str;
}

//with repeat
const stringy = (size) => "10".repeat(size).slice(0, size);

//across arr
const stringy = (size) => Array.from(Array(size), (v, i) => +!(i % 2)).join("");

//reg exp | good
function stringy(size) {
  return "1".repeat(size).replace(/11/g, "10");
}

//Math.floor | good
function stringy(size) {
  return "10".repeat(Math.floor(size / 2)) + (size % 2 ? "1" : "");
}

//not bad
stringy = (s) => `${new Array(~~(s / 2) + 1).join("10")}${s % 2 ? 1 : ""}`;

//like | while
function stringy(size) {
  let result = "";
  let p = 0;
  while (size--) {
    result += p++ % 2 === 0 ? "1" : "0";
  }
  return result;
}

//----------------------------------------------------
//Find Multiples of a Number
//first || cycle for
function findMultiples(integer, limit) {
  let arr = [];
  for (let i = 1; i <= limit; i++) {
    if (i % integer === 0) {
      arr.push(i);
    }
  }
  return arr;
}
