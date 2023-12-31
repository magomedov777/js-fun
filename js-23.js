//new lesson | sunday
//difference of volumes of cuboids
//first
const findDifference = (a, b) =>
  Math.abs(a.reduce((prev, curr) => prev * curr) - b.reduce((prev, curr) => prev * curr));

//good
function find_difference(a, b) {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}

//2 | one line
find_difference = (a, b) => Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);

//50/50
function find_difference([a, b, c], [d, e, f]) {
  return Math.abs(a * b * c - d * e * f);
}

//2
find_difference = ([a, b, c], [d, e, f]) => Math.abs(a * b * c - d * e * f);

//other
find_difference = (a, b) => ((c = (a, b) => a * b), Math.abs(a.reduce(c) - b.reduce(c)));

function find_difference(a, b) {
  a = a.reduce(function (i, ii) {
    return i * ii;
  });
  b = b.reduce(function (j, jj) {
    return j * jj;
  });
  return Math.max(a, b) - Math.min(a, b);
}

function findDifference(a, b) {
  let num1 = a[0];
  let num2 = b[0];
  for (var i = 1; i < 3; i++) {
    num1 = num1 * a[i];
    num2 = num2 * b[i];
  }
  if (num1 > num2) {
    return num1 - num2;
  }
  return num2 - num1;
}

//with cycle for
function findDifference(a, b) {
  let res = 0;
  let a1 = 1;
  let b1 = 1;
  for (let i = 0; i < a.length; i++) {
    a1 *= a[i];
  }
  for (let i = 0; i < b.length; i++) {
    b1 *= b[i];
  }
  if (a1 > b1) {
    res = a1 - b1;
  } else {
    res = b1 - a1;
  }
  return res;
}

//----------------------------------------------------
//new task | final grade
//first
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if (exam > 75 && projects > 4) return 90;
  if (exam > 50 && projects > 1) return 75;
  return 0;
}

//base | ternary
const finalGrade = (exam, projects) => {
  return exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;
};

//witch/case
function finalGrade(exam, projects) {
  switch (true) {
    case exam > 90 || projects > 10:
      return 100;
    case exam > 75 && projects >= 5:
      return 90;
    case exam > 50 && projects >= 2:
      return 75;
    default:
      return 0;
  }
}
