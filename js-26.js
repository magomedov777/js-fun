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
