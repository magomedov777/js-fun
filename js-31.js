//new lesson | wednesday
//new task
//first
const pipeFix = (numbers) => {
  const arr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr.push(i);
  }
  return arr;
};

//good
function pipeFix(numbers) {
  let min = numbers[0];
  let max = numbers[numbers.length - 1];
  let array = [];
  for (let i = min; i <= max; i++) {
    array.push(i);
  }
  return array;
}

//one line
let pipeFix = (nums) => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);

//not bad
function pipeFix(numbers) {
  let n_array = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    n_array.push(i);
  }
  return n_array;
}

//with slice
function pipeFix(num, arr = []) {
  for (let i = num[0]; i <= num.slice(-1)[0]; i++) {
    arr.push(i);
  }
  return arr;
}

//--------------------------------------------------------------------------

//get nth even num
//first | short
nthEven = (n) => n * 2 - 2;

//smart
function nthEven(n) {
  return --n * 2;
}

//Math.ceil
nthEven = (n) => Math.ceil((n - 1) * 2);

//-----------------------------------------------
//string work
//first
const nameShuffler = (str) => str.split(" ").reverse().join(" ");

//good
function nameSuffle(str) {
  let arr = str.split(" ");
  return arr[1] + " " + arr[0];
}

//replace | reg exp
const _nameShuffler = (str) => str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);

//good
function nameShuffler(str) {
  [firstName, lastName] = str.split(" ");
  return `${lastName} ${firstName}`;
}
