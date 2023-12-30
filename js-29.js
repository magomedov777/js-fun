//new lesson | saturday
//5 without numbers
//first
function unusualFive() {
  let arr = [{}, {}, {}, {}, {}];
  return arr.length;
}

//very smart
const unusualFive = () => Math.hypot(Math.ceil(Math.PI), Math.floor(Math.PI));

//good
const unusualFive = () => "one two three four five".split(" ").length;

//cool
function unusualFive() {
  return ~(~(~false ^ ((true << true) << true) ^ ~false) ^ true);
}

//char code
function unusualFive() {
  return "".charCodeAt();
}

//like
function unusualFive() {
  let string = ["a", "b", "c", "d", "e", "f"];
  let search = "f";
  let indexOfFirst = string.indexOf(search);
  return indexOfFirst;
}

//new
const unusualFive = () => Math.sqrt(Math.sqrt("ɱ".charCodeAt()));

//-------------------------------------------------------
//easy task
//first
problem = (x) => (x === +x ? x * 50 + 6 : "Error");

//good
const problem = (x) => (typeof x === "string" ? "Error" : x * 50 + 6);

//base
const _problem = (x) => (Number.isFinite(x) ? x * 50 + 6 : `Error`);

//if/else
function problem(x) {
  let sum = x * 50 + 6;
  if (x > 0 || x < 0 || x === 0) return sum;
  else {
    return "Error";
  }
}

//other
function problem(x) {
  if (isNaN(+x) || x === "") return "Error";
  return x * 50 + 6;
}
