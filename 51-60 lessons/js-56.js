//new lesson | thursday
//auth task
//first
function Sleigh(name, password) {}

Sleigh.prototype.authenticate = function (name, password) {
  if (name === "Santa Claus" && password === "Ho Ho Ho!") {
    return true;
  }
  return false;
};

//base
function Sleigh() {
  this.name = "Santa Claus";
  this.password = "Ho Ho Ho!";
}
Sleigh.prototype.authenticate = function (name, password) {
  return this.name == name && this.password == password;
};

//base
function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
  return name == "Santa Claus" && password == "Ho Ho Ho!";
};

//good
class Sleigh {
  constructor() {
    this.obj = { "Santa Claus": `Ho Ho Ho!` };
  }

  authenticate(name, password) {
    return this.obj[name] === password;
  }
}

//like
class Sleigh {
  authenticate(name, password) {
    return name == "Santa Claus" && password == "Ho Ho Ho!";
  }
}

//short
function Sleigh() {
  this.authenticate = (name, password) => name == "Santa Claus" && password == "Ho Ho Ho!";
}

//------------------------------------------------------------------------------------

//tip calc
//first
let tip = {
  terrible: 0.0,
  poor: 0.05,
  good: 0.1,
  great: 0.15,
  excellent: 0.2,
};

function calculateTip(a, r) {
  r = r.toLowerCase();
  return r in tip ? Math.ceil(tip[r] * a) : "Rating not recognised";
}

//switch/case
function calculateTip(amount, rating) {
  switch (rating.toLowerCase()) {
    case "terrible":
      return 0;
    case "poor":
      return Math.ceil(amount * 0.05);
    case "good":
      return Math.ceil(amount * 0.1);
    case "great":
      return Math.ceil(amount * 0.15);
    case "excellent":
      return Math.ceil(amount * 0.2);
    default:
      return "Rating not recognised";
  }
}

//good
let calculateTip = (a, r) => {
  const i = ["terrible", "poor", "good", "great", "excellent"].indexOf(r.toLowerCase());
  return i === -1 ? "Rating not recognised" : Math.ceil(i * a * 0.05);
};
