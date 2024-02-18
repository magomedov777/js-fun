//new lesson | friday
//ASCII char
//first || easiest
getASCII = (c) => c.charCodeAt();

//another condition in method
const getASCII = (c) => c.charCodeAt(0);

//normal
function getASCII(c) {
  return c.codePointAt();
}

//hardcore
function getASCII(chars) {
  return [...chars].map((char) => char.charCodeAt()).reduce((curr, prev) => prev + curr);
}

//bind
const getASCII = Function.call.bind(String.prototype.charCodeAt);

//for
function getASCII(c) {
  let index = 0;
  let i = c.charCodeAt(index);
  return i;
}

//fun
function getASCII(char) {
  let index =
    " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".indexOf(char);
  return index > -1 ? index + 32 : null;
}

//------------------------------------------------------------------
//regEXP | validate
//first
validateCode = (code) => /^[123]/g.test(code);

//another condition
function validateCode(code) {
  return /^[1-3]/.test(code);
}

//clever
function validateCode(code) {
  return +(code + "")[0] < 4;
}

//if/else
function validateCode(code) {
  let codeSplit = code.toString().split("");
  if (codeSplit[0] == "1" || codeSplit[0] == "2" || codeSplit[0] == "3") {
    return true;
  } else {
    return false;
  }
}

//cycle for
const validateCode = (c) => {
  const numToStr = `${c}`;
  for (let i = 0; i <= 3; i++) {
    const isStartWith = numToStr.startsWith(i);
    if (isStartWith) {
      return true;
    }
  }
  return false;
};
