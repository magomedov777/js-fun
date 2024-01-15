//new lesson | friday
//wolf & sheeps task
//first
const warnTheSheep = (queue) => {
  let rvrs = queue.reverse();
  let i = rvrs.indexOf("wolf");
  if (i === 0) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
  }
};

//new
function warnTheSheep(q) {
  return q[q.length - 1] === "wolf"
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${
        q.length - (q.indexOf("wolf") + 1)
      }! You are about to be eaten by a wolf!`;
}

//other | good
function warnTheSheep(queue) {
  const wolfPosition = queue.indexOf("wolf");
  const endPosition = queue.length - 1;
  return wolfPosition === endPosition
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${
        endPosition - wolfPosition
      }! You are about to be eaten by a wolf!`;
}

//-------------------------------------------------------
//second task | addLength
//first
addLength = (str) => str.split(" ").map((el) => String(el + " " + el.length));

//interpolation | base
function addLength(str) {
  return str.split(" ").map((s) => `${s} ${s.length}`);
}

//cycle for
function addLength(str) {
  let split = str.split(" ");
  let result = [];
  for (i = 0; i < split.length; ++i) {
    result.push(split[i] + " " + split[i].length);
  }
  return result;
}

//---------------------------------------------------------
//third task | triple trouble
//first | cycle for
function tripleTrouble(one, two, three) {
  let res = [];
  for (let i = 0; i < one.length; i++) {
    res.push(one[i], two[i], three[i]);
  }
  return res.join("");
}

//cycle for yet | very good
function tripleTrouble(one, two, three) {
  let result = "";
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return result;
}

//clever | across map
const tripleTrouble = (one, two, three) =>
  one
    .split("")
    .map((letter, index) => letter + two[index] + three[index])
    .join("");

//replace
function tripleTrouble(one, two, three) {
  return one.replace(/./g, (v, i) => v + two[i] + three[i]);
}

//reduce
const tripleTrouble = (one, two, three) =>
  one
    .split("")
    .reduce((acc, c, i, array) => [acc, one[i], two[i], three[i]].join(""), "");

//other
const tripleTrouble = (a, b, c) => Array.from(a, (x, i) => x + b[i] + c[i]).join("");
