//new lesson | saturday
//find min | max | difference
//first
function differenceInAges(ages) {
  let min = Math.min.apply(null, ages);
  let max = Math.max.apply(null, ages);
  let diff = max - min;
  return [min, max, diff];
}

//base
function differenceInAges(ages) {
  const min = Math.min(...ages);
  const max = Math.max(...ages);
  return [min, max, max - min];
}

//good
function differenceInAges(ages) {
  return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
}

//sort | like
function differenceInAges(ages) {
  let x = ages.sort((a, b) => a - b)[0];
  let y = ages.sort((a, b) => a - b)[ages.length - 1];
  return [x, y, y - x];
}

//cycle for
function differenceInAges(ages) {
  let youngest = ages[0];
  let oldest = ages[0];
  for (i = 0; i < ages.length; i++) {
    if (ages[i] > oldest) {
      oldest = ages[i];
    } else if (ages[i] < youngest) {
      youngest = ages[i];
    }
  }
  return [youngest, oldest, oldest - youngest];
}

//----------------------------------------------------------------

//pillars
//first | one line
pillars = (numPill, dist, width) => (numPill > 1 ? (numPill - 2) * width + (numPill - 1) * dist * 100 : 0);

//Math.max
pillars = (n, d, w) => Math.max(0, n - 1) * (d * 100) + Math.max(0, n - 2) * w;

//not bad
pillars = (num_pill, dist, width) => Math.max((dist * 100 + width) * --num_pill - width, 0);

//if/else
function pillars(num_pill, dist, width) {
  if (num_pill < 2) {
    return 0;
  }
  return num_pill * (dist * 100 + width) - width * 2 - dist * 100;
}
