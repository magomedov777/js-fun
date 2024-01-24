//new lessons | Monday
//take the derevative
//first
const derive = (coef, exp) => `${coef * exp}x^${exp - 1}`;

//base decl
function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`;
}

//good
function derive(a, b) {
  return a * b + "x^" + (b - 1);
}

//across variable
function derive(coefficient, exponent) {
  const product = coefficient * exponent;
  const newExponent = exponent - 1;
  return `${product}x^${newExponent}`;
}

//normal
function derive(coefficient, exponent) {
  return (coefficient * exponent).toString() + "x^" + (exponent - 1).toString();
}

//----------------------------------------
//string cleaning
//first
stringClean = (s) => s.replace(/[1234567890]/g, "");

//goooood
function stringClean(s) {
  return s.replace(/\d/g, "");
}

//not bad
function stringClean(s) {
  return s.replace(/[0-9]/g, "");
}

//clever | hardcore
function stringClean(s) {
  while (s.indexOf(0) >= 0) {
    s = s.replace(0, "");
  }
  while (s.indexOf(1) >= 0) {
    s = s.replace(1, "");
  }
  while (s.indexOf(2) >= 0) {
    s = s.replace(2, "");
  }
  while (s.indexOf(3) >= 0) {
    s = s.replace(3, "");
  }
  while (s.indexOf(4) >= 0) {
    s = s.replace(4, "");
  }
  while (s.indexOf(5) >= 0) {
    s = s.replace(5, "");
  }
  while (s.indexOf(6) >= 0) {
    s = s.replace(6, "");
  }
  while (s.indexOf(7) >= 0) {
    s = s.replace(7, "");
  }
  while (s.indexOf(8) >= 0) {
    s = s.replace(8, "");
  }
  while (s.indexOf(9) >= 0) {
    s = s.replace(9, "");
  }
  return s;
}

//with arr methods
function stringClean(s) {
  return s
    .split("")
    .filter((n) => n != parseInt(n))
    .join("");
}

//cycle for
function stringClean(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i]) || s[i] == " ") result += s[i];
  }
  return result;
}

//fun
function stringClean(s) {
  return s
    .split("0")
    .join("")
    .split("1")
    .join("")
    .split("2")
    .join("")
    .split("3")
    .join("")
    .split("4")
    .join("")
    .split("5")
    .join("")
    .split("6")
    .join("")
    .split("7")
    .join("")
    .split("8")
    .join("")
    .split("9")
    .join("");
}

//----------------------------------------
//dollars & cents | convert
//first
formatMoney = (amount) => `$${amount.toFixed(2)}`;

//good | base
function formatMoney(amount) {
  return "$" + amount.toFixed(2);
}

//normal
const dollar = 1.0;
const formatMoney = (amount) => {
  return "$" + (dollar * amount).toFixed(2);
};
