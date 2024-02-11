//new lesson | friday
//who is paying
//first
whoIsPaying = (name) => (name.length <= 2 ? [name] : [name, `${name[0]}${name[1]}`]);

//substr
function whoIsPaying(name) {
  return name.length > 2 ? [name, name.substr(0, 2)] : [name];
}

//slice
function whoIsPaying(name) {
  return name.length > 2 ? [name, name.slice(0, 2)] : [name];
}

//if
function whoIsPaying(name) {
  if (name.length <= 2) return [name];
  return [name, name.slice(0, 2)];
}

//const && Set
const whoIsPaying = (name) => [...new Set([name, name.slice(0, 2)])];

//normal
function whoIsPaying(name) {
  let res = name.split(" ").map(function (el) {
    return el;
  });
  if (name.length > 2) {
    return [res + " " + name.slice(0, 2)].join("").split(" ");
  }
  return res;
}

//----------------------------------------------------------------
//who ate
//first
function cookie(x) {
  return `Who ate the last cookie? It was ${{ string: "Zach", number: "Monica" }[typeof x] || "the dog"}!`;
}

//good
function cookie(x) {
  let t = typeof x;
  let who = t == "string" ? "Zach" : t == "number" ? "Monica" : "the dog";
  return `Who ate the last cookie? It was ${who}!`;
}

//not bad | ternary
function cookie(x) {
  return typeof x == "string"
    ? "Who ate the last cookie? It was Zach!"
    : typeof x == "number"
    ? "Who ate the last cookie? It was Monica!"
    : "Who ate the last cookie? It was the dog!";
}

//switch/case
function cookie(x) {
  let resultString = "Who ate the last cookie? It was ";
  switch (typeof x) {
    case "string":
      return (resultString += "Zach!");
    case "number":
      return (resultString += "Monica!");
    default:
      return (resultString += "the dog!");
  }
}
