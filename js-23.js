//new lesson | sunday
//difference of volumes of cuboids
//first
const findDifference = (a, b) =>
  Math.abs(a.reduce((prev, curr) => prev * curr) - b.reduce((prev, curr) => prev * curr));

//good
function find_difference(a, b) {
  return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}

//50/50
function find_difference([a, b, c], [d, e, f]) {
  return Math.abs(a * b * c - d * e * f);
}

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
