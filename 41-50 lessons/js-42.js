//new lesson | thursday
//first
const add = function (n) {
  const res = (x) => add(n + x);
  res.valueOf = () => n;
  return res;
};

//clever
const _add = (n) => Object.assign((i) => add(i + n), { valueOf: () => n });

//good
function add(n) {
  let tail = (num) => add(n + num);
  tail.toString = () => n;
  return tail;
}

//bind
function add(n) {
  let next = add.bind((n += this | 0));
  next.valueOf = function () {
    return n;
  };
  return next;
}

//const
const add = (n) => Object.assign((val) => add(n + val), { valueOf: () => n });

//--------------------------------------------------------------------
//drinks task
//first
function getDrinkByProfession(param) {
  param = param.toLowerCase();
  if (param === "jabroni") return "Patron Tequila";
  if (param === "school counselor") return "Anything with Alcohol";
  if (param === "programmer") return "Hipster Craft Beer";
  if (param === "bike gang member") return "Moonshine";
  if (param === "politician") return "Your tax dollars";
  if (param === "rapper") return "Cristal";
  else return "Beer";
}

//switch/case
function getDrinkByProfession(param) {
  param = param.toLowerCase();
  switch (param) {
    case "jabroni":
      return "Patron Tequila";
    case "school counselor":
      return "Anything with Alcohol";
    case "programmer":
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine";
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}

//clever
const drinks = {
  jabroni: "Patron Tequila",
  "school counselor": "Anything with Alcohol",
  programmer: "Hipster Craft Beer",
  "bike gang member": "Moonshine",
  politician: "Your tax dollars",
  rapper: "Cristal",
};
const getDrinkByProfession = (profession) => drinks[profession.toLowerCase()] || "Beer";

//with MAP
function getDrinkByProfession(param) {
  let map = new Map([
    ["jabroni", "Patron Tequila"],
    ["school counselor", "Anything with Alcohol"],
    ["programmer", "Hipster Craft Beer"],
    ["bike gang member", "Moonshine"],
    ["politician", "Your tax dollars"],
    ["rapper", "Cristal"],
  ]);
  let normal = param.toLowerCase();
  return map.has(normal) ? map.get(normal) : "Beer";
}
