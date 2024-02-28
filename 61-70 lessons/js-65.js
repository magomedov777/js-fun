//new lesson | tuesday
//pirates task
//first
cannonsReady = (gunners) => (Object.values(gunners).includes("nay") ? "Shiver me timbers!" : "Fire!");

//some
cannonsReady = (gunners) => {
  return Object.values(gunners).some((m) => m === "nay") ? "Shiver me timbers!" : "Fire!";
};

//cycle for
let cannonsReady = (gunners) => {
  for (let i in gunners) {
    if (gunners[i] == "nay") {
      return "Shiver me timbers!";
    }
  }
  return "Fire!";
};

//every
cannonsReady = (a) => (Object.keys(a).every((g) => a[g] === "aye") ? "Fire!" : "Shiver me timbers!");

//map
function cannonsReady(gunners) {
  return Object.keys(gunners)
    .map((pirate) => gunners[pirate])
    .includes("nay")
    ? "Shiver me timbers!"
    : "Fire!";
}

//clever
cannonsReady = (gunners) => (JSON.stringify(gunners).includes("nay") ? "Shiver me timbers!" : "Fire!");

//------------------------------------------------------------------------------------------

//split and merge func
//first
function splitAndMerge(string, separator) {
  return string
    .split(" ")
    .map((el) => el.split("").join(separator))
    .join(" ");
}

//cycle for
function splitAndMerge(str, sp) {
  let words = str.split(" ");
  let arr = [];
  let res = [];
  for (i = 0; i < words.length; i++) {
    arr.push(words[i].split("").join(sp));
  }
  res = arr.join(" ");
  return res;
}

//like
function splitAndMerge(string, separator) {
  return string
    .split("")
    .join(separator + "")
    .split(separator + " " + separator)
    .join(" ");
}

//str methods
function splitAndMerge(string, separator) {
  return string
    .split("")
    .join(separator + "")
    .split(separator + " " + separator)
    .join(" ");
}
