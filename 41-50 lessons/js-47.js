//new lesson | thursday
//switch/case
//first
function howManydays(month) {
  var days;
  switch (month) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;
  }
  return days;
}

//clever
function howManydays(month) {
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
  return 31;
}

//good
function howManydays(month) {
  switch (month) {
    case 2:
      return 28;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    default:
      return 31;
  }
}

//not bad
let howManydays = (m) => {
  var days;
  switch (m) {
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
    default:
      days = 31;
  }
  return days;
};

//best | array
const days = ["", 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const howManydays = (n) => {
  switch (n) {
    case n:
      return days[n];
  }
};

//--------------------------------------------------------------------------------------------
//lower case letters
//first
function lowercaseCount(str) {
  let arr = str.split("");
  let res = arr.filter((el) => el.toLowerCase());
  let x = res.filter((el) => el.toLowerCase() && el !== el.toUpperCase()).length;
  return x;
}

//smart
function lowercaseCount(str) {
  return (str.match(/[a-z]/g) || []).length;
}

//one line
lowercaseCount = (str) => str.match(/[a-z]/g || []).length;

//clever
function lowercaseCount(str) {
  return str.replace(/[^a-z]/g, "").length;
}

//good
function lowercaseCount(str) {
  return str.length - str.replace(/[a-z]/g, "").length;
}

//filter
function lowercaseCount(str) {
  return str.split("").filter((el) => /[a-z]/.test(el)).length;
}

//-------------------------------------------------------------------
//validation username
//first
validateUsr = (username) => /^[a-z0-9_]{4,16}$/.test(username);

//good | other regex
validateUsr = (Q) => /^[\da-z_]{4,16}$/.test(Q);

//most difficult
function validateUsr(username) {
  return username.length >= 4 && username.length <= 16 && !/\W|[A-Z]/.test(username);
}
