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
