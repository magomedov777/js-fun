//new lesson
//first task | fundamentals
//base
function getAge(inputString) {
  return parseInt(inputString[0] + "years old");
}

function getAge(inputString) {
  return parseInt(inputString);
}

function getAge(inputString) {
  return parseInt(inputString[0]);
}

function getAge(inputString) {
  return +inputString[0];
}

getAge = (inputString) => parseInt(inputString[0] + "years old");

//switch/case | for fun
function getAge(inputString) {
  switch (inputString) {
    case "1 years old":
      return 1;
    case "2 years old":
      return 2;
    case "3 years old":
      return 3;
    case "4 years old":
      return 4;
    case "5 years old":
      return 5;
    case "6 years old":
      return 6;
    case "7 years old":
      return 7;
    case "8 years old":
      return 8;
    case "9 years old":
      return 9;
    default:
      return 1;
  }
}

//good
function getAge(inputString) {
  return inputString.match(/[0-9]/)[0] * 1;
}

//-----------------------------------------
//new task | dog years
//first
function humanYearsCatYearsDogYears(humanYears) {
  if (humanYears === 1) return [1, 15, 15];
  if (humanYears === 2) return [2, 24, 24];
  return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
}
