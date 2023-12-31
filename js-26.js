//new lesson | wednesday
//first | if/else practic
function saleHotdogs(n) {
  if (n < 5) return n * 100;
  if (n >= 5 && n < 10) return n * 95;
  else return n * 90;
}

//base | ternary
function saleHotdogs(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}

//if/else
function saleHotdogs(n) {
  let money = 0;
  if (n < 5) {
    money = n * 100;
  } else if (n >= 5 && n < 10) {
    money = n * 95;
  } else if (n >= 10) {
    money = n * 90;
  }
  return money;
}

//one line
const saleHotdogs = (n) => n * (n < 5 ? 100 : n < 10 ? 95 : 90);

//switch/case
const saleHotdogs = (n) => {
  switch (true) {
    case n < 5:
      return n * 100;
    case n < 10:
      return n * 95;
    default:
      return n * 90;
  }
};

//----------------------------------------------------
//terminal game func
//first | one line
move = (position, roll) => position + roll * 2;

//base
//1
function move(position, roll) {
  return position + roll * 2;
}

//2
function move(position, roll) {
  const newPosition = position + roll * 2;
  return newPosition;
}

//ternary
function move(position, roll) {
  return roll >= 1 && roll <= 6 ? roll * 2 + position : null;
}

//-------------------------------------------------------
//birds filter
//first
function gooseFilter(birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((el) => !geese.includes(el));
}

//indexOf
function gooseFilter(birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter((bird) => geese.indexOf(bird) < 0);
}

//cycle for
function gooseFilter(birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let newArray = [];
  for (let i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) {
      newArray.push(birds[i]);
    }
  }
  return newArray;
}

//good
gooseFilter = (b) =>
  b.filter((e) => !["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"].some((x) => x == e));
