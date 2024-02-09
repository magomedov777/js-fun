//new lessons | thursday
//contamination string
//first
function contamination(text, char) {
  if (!text || !char) {
    return "";
  }
  return char.repeat(text.length);
}

//base | best
function contamination(text, char) {
  return char.repeat(text.length);
}

//regExp
function contamination(text, char) {
  return text.replace(/./g, char);
}

//toArr
function contamination(text, char) {
  return text.split("").fill(char).join("");
}

//cycle for
function contamination(text, char) {
  if (text.length === 0 || char.length === 0) {
    return "";
  } else {
    let str = "";
    for (let i = 0; i < text.length; i += 1) {
      str += char;
    }
    return str;
  }
}

//good
const contamination = (text, char) => [...text].map((e) => (e = char)).join("");

//-----------------------------------------------------------------

//CSV represent
//first
toCsvText = (arr) => arr.map((el) => el.join(",")).join("\n");

//base
function toCsvText(array) {
  return array.join("\n");
}

//cycle for
function toCsvText(array) {
  let finalStr = "";
  for (let i = 0; i < array.length; i++) {
    finalStr += array[i].toString() + "\n";
  }
  return finalStr.slice(0, -1);
}
