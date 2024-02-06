//new lesson | monday
//string work
//first
remove = (string) => string.replace(/!+/g, "") + "!";

//interpolation
const remove = (s) => `${s.replace(/!/g, "")}!`;

//array methods
const _remove = (s) => s.split("!").join("") + "!";

//concat
function remove(s) {
  return s.replace(/!/g, "").concat("!");
}

//cycle for
function remove(s) {
  let str = "";
  for (let i = 0; i < s.length; ++i) if (s[i] != "!") str += s[i];
  return str + "!";
}

//replaceAll
const remove = (str) => str.replaceAll("!", "") + "!";

//like
function remove(string) {
  const ss = string.split("!").join("");
  if (ss !== "!") {
    return ss + "!";
  }
}

//--------------------------------------------------------------------------------

//remove the time
//first
shortenToDate = (longDate) => longDate.split(",")[0];

//slice
function shortenToDate(longDate) {
  return longDate.slice(0, longDate.indexOf(","));
}

//good
function shortenToDate(longDate) {
  const [date, time] = longDate.split(",");
  return date;
}

//replace
const shortenToDate = (longDate) => longDate.replace(/, \d\d?[ap]m$/, "");

//cycle for
function shortenToDate(lD) {
  let res = "";
  for (let i of lD) {
    if (i != ",") {
      res += i;
    } else {
      break;
    }
  }
  return res;
}

//like
const shortenToDate = (longDate) => longDate.replace(/,.*/, ``);
