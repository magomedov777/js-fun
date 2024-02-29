//new lesson | wednesday
//regEXP
//first
function validateHello(greetings) {
  return /hello|ciao|salut|hallo|hola|ahoj|czesc/g.test(greetings.toLowerCase());
}

//one line
validateHello = (greetings) => /h[ae]llo|ciao|salut|hola|ahoj|czesc/i.test(greetings);

//for in | obj
const hellos = {
  hello: "english",
  ciao: "italian",
  salut: "french",
  hallo: "german",
  hola: "spanish",
  ahoj: "czech republic",
  czesc: "polish",
};

const validateHello = (greetings) => {
  for (key in hellos) {
    if (greetings.toLowerCase().includes(key)) {
      return true;
    }
  }
  return false;
};

//like | RegExp class
const vivas = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
const validateHello = (message) => new RegExp(vivas.join("|"), "i").test(message);

//-----------------------------------------------------------------------

//two highest values in arr
//first
const twoHighest = (arr) => {
  return [...new Set(arr.sort((a, b) => b - a))].slice(0, 2);
};

//good
function twoHighest(arr) {
  if (!arr.length) return [];
  const max1 = Math.max(...arr);
  let max2;
  const filteredArr = arr.filter((el) => el !== max1);
  if (filteredArr.length) {
    max2 = Math.max(...filteredArr);
  }
  return max2 ? [max1, max2] : [max1];
}

//like
function twoHighest(numbers) {
  if (numbers.length < 2) return numbers;
  let highest = -Infinity;
  let secondHighest = -Infinity;

  for (let number of numbers) {
    if (number > highest) {
      secondHighest = highest;
      highest = number;
      continue;
    }
    if (number !== highest && number > secondHighest) {
      secondHighest = number;
    }
  }
  return [highest, secondHighest];
}

//step by step
function twoHighest(arr) {
  const high = [...new Set(arr)];
  high.sort((a, b) => b - a);
  return high.slice(0, 2);
}

//--------------------------------------------------------------------
//quadrants
//first
quadrant = (x, y) => (x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3);

//if/else
function quadrant(x, y) {
  if (x > 0 && y > 0) return 1;
  if (x < 0 && y > 0) return 2;
  if (x < 0 && y < 0) return 3;
  return 4;
}

//switch/case
function quadrant(x, y) {
  // Poveli!
  switch (true) {
    case x > 0 && y > 0:
      return 1;
    case x < 0 && y > 0:
      return 2;
    case x < 0 && y < 0:
      return 3;
    default:
      return 4;
  }
}

//Math.sign
quadrant = (x, y) => [3, 4, 2, 1][Math.sign(x) / 2 + Math.sign(y) + 1.5];
