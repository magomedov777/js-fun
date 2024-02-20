//new lesson | monday
//RegEXP
//first
String.prototype.digit = function () {
  return /^\d$/.test(this);
};

//0-9
String.prototype.digit = function () {
  return /^[0-9]$/.test(this);
};

//ternary
String.prototype.digit = function () {
  return this.match(/^[0-9]$/) ? true : false;
};

//&&
String.prototype.digit = function () {
  return this.length === 1 && "0" <= this && this <= "9";
};

//Boolean
String.prototype.digit = function () {
  return this.length === 1 && "0" <= this && this <= "9";
};

//fun
String.prototype.digit = function () {
  if (this == "1") {
    return true;
  }
  if (this == "2") {
    return true;
  }
  if (this == "3") {
    return true;
  }
  if (this == "4") {
    return true;
  }
  if (this == "5") {
    return true;
  }
  if (this == "6") {
    return true;
  }
  if (this == "7") {
    return true;
  }
  if (this == "8") {
    return true;
  }
  if (this == "9") {
    return true;
  }
  if (this == "0") {
    return true;
  }

  return false;
};

//------------------------------------------------------------------

//new task
//first
function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name;
}

//one line
duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;

//while
function duckDuckGoose(players, goose) {
  let circle = goose;
  while (players.length < circle) {
    circle -= players.length;
  }
  return players[circle - 1].name;
}

//cycle for
function duckDuckGoose(players, goose) {
  for (let i = 0; i < players.length; i++) {
    if (i === (goose - 1) % players.length) {
      return players[i].name;
    }
  }
}
