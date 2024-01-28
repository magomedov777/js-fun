//new lessons | friday
//volume and area
//first
function getSize(width, height, depth) {
  let volume = width * height * depth;
  let area = 2 * (width * height + width * depth + height * depth);
  let c = [area, volume];
  return c;
}

//hard
function getSize(width, height, depth) {
  var box = { width: width, height: height, depth: depth };
  return [getArea(box), getVolume(box)];
}
function getArea(box) {
  return 2 * (box.depth * box.height) + 2 * (box.width * box.height) + 2 * (box.width * box.depth);
}
function getVolume(box) {
  return box.width * box.height * box.depth;
}

//clever
const getSize = (w, h, d) => [(w * h + w * d + h * d) * 2, w * h * d];

//good
function getSize(w, h, d) {
  let arr = [];
  arr.push(w * h * 2 + h * d * 2 + d * w * 2);
  arr.push(w * h * d);
  return arr;
}

//--------------------------------------------------------

//class task
//first
var Ball = function (ballType) {
  if (!ballType) return (this.ballType = "regular");
  else return (this.ballType = ballType);
};

//good
var Ball = function (ballType) {
  this.ballType = ballType || "regular";
};

//base
class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

//good | ternary
var Ball = function (ballType) {
  this.ballType = typeof ballType !== "undefined" ? ballType : "regular";
};

//ternary
var Ball = function (ballType) {
  this.ballType = ballType ? ballType : "regular";
};

//---------------------------------------------------------------------
//cube checker
//first
const cubeChecker = (volume, side) => volume / side ** 2 === side && side > 0;

//Math.pow
var _cubeChecker = function (volume, side) {
  return Math.pow(side, 3) === volume && side > 0;
};

//if/else
var __cubeChecker = function (volume, side) {
  if (side <= 0 || volume <= 0) {
    return false;
  } else if (Math.pow(side, 3) !== volume) {
    return false;
  } else {
    return true;
  }
};

//normal
var cubeChecker__ = function (volume, side) {
  return volume > 0 ? side * side * side === volume : false;
};

//not bad
const cubeChecker__ = (volume, side) => volume > 0 && side > 0 && volume === Math.pow(side, 3);
