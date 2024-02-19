//new lesson | sunday
//OOP task
//first
class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    this.isWorthIt = function () {
      return this.draft - this.crew * 1.5 > 20;
    };
    this.isWorthIt();
  }
}

//base | prototype
function Ship(draft, crew) {
  this.draft = draft;
  this.crew = crew;
}
Ship.prototype.isWorthIt = function () {
  return this.draft - this.crew * 1.5 > 20;
};

//good
class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }
  isWorthIt() {
    return this.draft - 1.5 * this.crew > 20;
  }
}

//------------------------------------------------------------
//multiply task*
//first
multiply = (number) => number * 5 ** String(Math.abs(number)).length;

//Math.pow
function multiply(number) {
  return number * Math.pow(5, Math.abs(number).toString().length);
}

//if/else
function multiply(number) {
  let x = "'" + number + "'";
  if (number >= 0) {
    let a = x.length - 2;
  } else if (number < 0) {
    let a = x.length - 3;
  }
  let b = Math.pow(5, a);
  return number * b;
}

//power
//first
function numberToPower(number, power) {
  let res = 1;
  for (let i = 1; i <= power; i++) {
    res = res * number;
  }
  return res;
}

//one line | good
numberToPower = (number, power) => (power > 0 ? number * numberToPower(number, power - 1) : 1);

//if
function numberToPower(number, power) {
  if (power === 0) return 1;
  return number * numberToPower(number, power - 1);
}

//cycle for | like
function numberToPower(number, power) {
  var result = 1;
  for (let i = 0; i < power; ++i) result *= number;
  return result;
}

//clever
function numberToPower(number, power) {
  return Array(power)
    .fill(number)
    .reduce((res, n) => res * n, 1);
}
