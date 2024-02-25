//new lesson | saturday
//compare within margin
//first
function closeCompare(a, b, margin = 0) {
  if (a < b - margin) return -1;
  if (a - margin > b) return 1;
  return 0;
}

//clever
function closeCompare(a, b, m = 0) {
  return Math.abs(a - b) <= m ? 0 : Math.sign(a - b);
}

//good
function closeCompare(a, b, margin = 0) {
  return Math.abs(a - b) <= margin ? 0 : a < b ? -1 : 1;
}

//if/else
function closeCompare(a, b, margin) {
  if (a == b || Math.abs(a - b) <= margin) {
    return 0;
  }
  return a > b ? 1 : -1;
}

//if/else
function closeCompare(a, b, margin = 0) {
  if (a > b + margin) {
    return 1;
  } else if (a + margin < b) {
    return -1;
  } else {
    return 0;
  }
}

//---------------------------------------------------------------
//The falling speed of petals
//first
function sakuraFall(v) {
  return v > 0 ? 400 / v : 0;
}

//one line
sakuraFall = (velocity) => (velocity > 0 ? 400 / velocity : 0);

//like
function sakuraFall(v) {
  return 80 * (5 / v) > 0 && 80 * (5 / v) != Infinity ? (80 * 5) / v : 0;
}
