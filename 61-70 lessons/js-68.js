//new lesson | sunday
/*l ogarithms sum
logarithm, the exponent or power to which a base must be raised to yield a given number.
 Expressed mathematically, x is the logarithm of n to the base b if bx = n,
 in which case one writes x = logb n. For example, 2 ** 3 = 8; therefore,
 3 is the logarithm of 8 to base 2, or 3 = log2 8.  */
//first

logs = (x, a, b) => Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);

//clever
function logs(x, a, b) {
  return Math.log(a * b) / Math.log(x);
}

//gooood
logs = (x, a, b) => (Math.log(a) + Math.log(b)) / Math.log(x);

//fun
logs = (x, a, b, l = Math.log) => l(a * b) / l(x);

//step by step | like
function logs(x, a, b) {
  const logA = Math.log(a) / Math.log(x);
  const logB = Math.log(b) / Math.log(x);
  const sum = logA + logB;
  return sum;
}

//normal
function logs(x, a, b) {
  if (x > 0 && x !== 1 && a > 0 && b > 0) {
    return Math.log(a) / Math.log(x) + Math.log(b) / Math.log(x);
  }
  return Infinity;
}

//-----------------------------------------------------------------

//flick switcher
//first
function flickSwitch(arr) {
  let result = [];
  let switchValue = false;
  for (let item of arr) {
    if (item === "flick") {
      switchValue = !switchValue;
    }
    result.push(!switchValue);
  }
  return result;
}

//goooooooooooooooooooooood
function flickSwitch(arr) {
  let returning = true;
  return arr.map((v) => {
    return v === "flick" ? (returning = !returning) : returning;
  });
}

//cycle for
function flickSwitch(arr) {
  let flag = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "flick") {
      flag == false ? (flag = true) : (flag = false);
    }
    arr[i] = flag;
  }
  return arr;
}
