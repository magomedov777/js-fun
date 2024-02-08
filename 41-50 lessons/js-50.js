//new lesson | wednesday
//firstname, lastname
//first
combineNames = (firstName, lastName) => `${firstName} ${lastName}`;

//gooooood
const combineNames = (...names) => names.join(" ");

//with exp
const _combineNames = function (first, last) {
  return first + " " + last;
};

//join | call
function combineNames() {
  return Array.prototype.join.call(arguments, " ");
}

//concat
const combineNames = (a, b) => a + " ".concat(b);

//-------------------------------------------------------------------------

//nextID
//first
function nextId(ids) {
  return ids.sort((a, b) => a - b).reduce((prev, curr) => prev + (prev === curr), 0);
}

//while
function nextId(ids) {
  let x = 0;
  while (ids.includes(x)) x++;
  return x;
}

//cycle for
function nextId(ids) {
  const used = new Set(ids);
  for (let i = 0; i <= ids.length; i++) {
    if (!used.has(i)) return i;
  }
}

//good
function nextId(ids) {
  for (i = 0; i < ids.length; i++) {
    if (ids.indexOf(i) == -1) {
      return i;
    }
  }
  return ids.length;
}

//hardcore
const nextId = (ids) =>
  ((val) => (val < 0 ? Math.max(...ids) + 1 : val))(ids.findIndex((_, idx) => !ids.includes(idx)));
