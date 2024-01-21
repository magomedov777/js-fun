//new lessons | saturday
//array mean
//first
findAverage = (nums) => nums.reduce((acc, curr) => acc + curr, 0) / nums.length;

//function expression
const findAverage = function (nums) {
  let sum = 0;
  for (n in nums) {
    sum += nums[n];
  }
  return sum / nums.length;
};

//hardcore
function findAverage(array) {
  let total;
  let copy = array.slice();
  let sum = copy.reduce((previousVal, currentVal) => {
    return previousVal + currentVal;
  });
  return (total = sum / array.length);
}

//cycle for
function findAverage(nums) {
  let sum = 0;
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    index++;
  }
  return index >= 1 ? sum / index : sum;
}

//--------------------------------------------------------

//obj tasks | elementary
//first | interpolation
animal = (obj) => `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;

//base
function animal(obj) {
  return "This" + " " + obj.color + " " + obj.name + " " + "has" + " " + obj.legs + " " + "legs.";
}

//normal
function animal({ name, legs, color }) {
  return `This ${color} ${name} has ${legs} legs.`;
}

//with key[]
function animal(obj) {
  return `This ${obj["color"]} ${obj["name"]} has ${obj["legs"]} legs.`;
}

//--------------------------------------------------------

//array madness
//first
function arrayMadness(a, b) {
  let x = a.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
  let y = b.reduce((acc, curr) => acc + Math.pow(curr, 3), 0);
  if (x > y) {
    return true;
  }
  return false;
}

//like
const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x ** 2, 0) > b.reduce((acc, x) => acc + x ** 3, 0);

//base | clever
function arrayMadness(a, b) {
  return a.reduce((sum, el) => sum + el ** 2, 0) > b.reduce((sum, el) => sum + el ** 3, 0);
}

//cycle for
function arrayMadness(a, b) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0, { length } = a; i < length; ++i) {
    sum1 += a[i] ** 2;
  }
  for (let i = 0, { length } = b; i < length; ++i) {
    sum2 += b[i] ** 3;
  }
  return sum1 > sum2;
}

//not bad
const pow = (base, exp) => base.reduce((res, el) => (res += el ** exp), 0);
const arrayMadness = (a, b) => pow(a, 2) > pow(b, 3);
