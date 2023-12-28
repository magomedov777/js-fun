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
