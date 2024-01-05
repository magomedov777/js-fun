//new lesson | thirsday
//string work
//first
remove = (string) => string.replace(/\!$/g, "");

//slice & endsWith
function remove(s) {
  return s.endsWith("!") ? s.slice(0, -1) : s;
}

//slice
function remove(s) {
  return s[s.length - 1] == "!" ? s.slice(0, -1) : s;
}

//substr
function remove(s) {
  return s.charAt(s.length - 1) == "!" ? s.substr(0, s.length - 1) : s;
}

//charAt & slice
function remove(s) {
  return s.charAt(s.length - 1) === "!" ? s.slice(0, -1) : s;
}

//ternary
function remove(s) {
  return s.substr(-1) === "!" ? s.slice(0, -1) : s;
}

//with cycle for
function remove(s) {
  let removedString = "";
  for (let i = 0; i < s.length; i++) {
    if (i === s.length - 1) {
      if (s[i] === "!") {
        removedString += "";
      } else {
        removedString += s[i];
      }
    } else {
      removedString += s[i];
    }
  }
  return removedString;
}

//---------------------------------------------------
//str count
function getCount(str) {
  return (str.match(/[aeiou]/g) || []).length;
}

//cycle for
function getCount(str) {
  let vowelsCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}

//good!
function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

//clever
function getCount(str) {
  return str.replace(/[^aeiou]/gi, "").length;
}

//switch/case | for fun
function getCount(str) {
  let vowelsCount = 0;
  for (index in str) {
    switch (str[index]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowelsCount++;
        break;
    }
  }
  return vowelsCount;
}
