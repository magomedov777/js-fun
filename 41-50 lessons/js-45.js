//new lesson | Tuesday
//elevator task
//first
function elevator(left, right, call) {
  const leftDist = Math.abs(left - call);
  const rightDist = Math.abs(right - call);
  if (leftDist < rightDist) {
    return "left";
  } else if (leftDist > rightDist) {
    return "right";
  } else {
    return "right";
  }
}

//best | ternary
const elevator = (left, right, call) => (Math.abs(call - left) < Math.abs(call - right) ? "left" : "right");

//fun
function elevator(left, right, call) {
  if (
    (left === 0 && right === 1 && call === 0) ||
    (left === 0 && right === 2 && call === 0) ||
    (left === 1 && right === 0 && call === 1) ||
    (left === 1 && right === 0 && call === 2) ||
    (left === 1 && right === 2 && call === 0) ||
    (left === 1 && right === 2 && call === 1) ||
    (left === 2 && right === 0 && call === 2) ||
    (left === 2 && right === 1 && call === 2)
  ) {
    return "left";
  } else {
    return "right";
  }
}

//good
function elevator(a, b, c) {
  return (c - a) ** 2 < (c - b) ** 2 ? "left" : "right";
}

//----------------------------------------------
//nearestSquare
//first
nearestSq = (n) => Math.pow(Math.round(Math.sqrt(n)), 2);

//Math.round
function nearestSq(n) {
  return Math.round(n ** 0.5) ** 2;
}

//good
const nearestSq = (n) => Math.round(Math.sqrt(n)) ** 2;

//step by step
function nearestSq(n) {
  if (n == 1) return n;
  let z = Math.sqrt(n);
  let res = Math.round(z);
  let result = res * res;
  return result;
}

//cycle for
function nearestSq(n) {
  for (let i = 0; (i < n) ^ 2; i++) {
    if (Number.isInteger(Math.sqrt(n + i)) == true) {
      return n + i;
    }
    if (Number.isInteger(Math.sqrt(n - i)) == true) {
      return n - i;
    }
  }
}
