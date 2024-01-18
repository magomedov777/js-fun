//new lesson | Wednesday
//Gravity Flip
//first | one line
flip = (d, a) => (d === "R" ? a.sort((a, b) => a - b) : a.sort((a, b) => b - a));

//one line yet
const flip = (d, a) => a.sort((x, y) => (d === "R" ? x - y : y - x));

//if
const _flip = (d, a) => {
  if (d === "R") return a.sort((a, b) => a - b);
  if (d === "L") return a.sort((a, b) => b - a);
};

//good
const __flip = (direction, columns) =>
  [...columns].sort((A, Z) => {
    if (direction === "R") return A - Z;
    if (direction === "L") return Z - A;
  });

//-------------------------------------------
//Basic data types | Array
//first
getLength = (arr) => arr.length;

getFirst = (arr) => arr[0];

getLast = (arr) => arr[arr.length - 1];

pushElement = (arr) => {
  var el = 1;
  arr.push(el);
  return arr;
};
popElement = (arr) => {
  arr.pop();
  return arr;
};

//goooooood
const getLength = (array) => array.length;

const getFirst = (array) => array[0];

const getLast = (array) => array[array.length - 1];

const pushElement = (array) => array.concat(0);

const popElement = (array) => array.splice(0, array.length - 1);

//clever
getLength = (a) => a.length;
getFirst = (a) => a[0];
getLast = (a) => a[a.length - 1];
pushElement = (a) => {
  a.push(4);
  return a;
};
popElement = (a) => {
  a.pop();
  return a;
};

//---------------------------------------------------------------
//welcome to the city
//first
function sayHello(name, city, state) {
  let newName = name.join(" ");
  return `Hello, ${newName}! Welcome to ${city}, ${state}!`;
}

//without variable
function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

//base
function sayHello(name, city, state) {
  return "Hello, " + name.join(" ") + "! Welcome to " + city + ", " + state + "!";
}
