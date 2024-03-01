//new lesson | friday
//do/while | base
//first
function padIt(str, n) {
  while (n > 0) {
    if (n % 2) {
      str = "*" + str;
    } else {
      str = str + "*";
    }
    n--;
  }
  return str;
}

//good
function padIt(str, n) {
  while (n > 0) {
    str = n-- % 2 ? "*" + str : str + "*";
  }
  return str;
}

//repeat
function padIt(str, n) {
  return "*".repeat(Math.ceil(n / 2)) + str + "*".repeat(Math.floor(n / 2));
}

//step by step
function padIt(str, n) {
  let counter = 1;
  while (counter <= n) {
    if (counter % 2 != 0) str = "*" + str;
    if (counter % 2 == 0) str += "*";
    counter++;
  }
  return str;
}

//one line
padIt = (str, n) => "*".repeat((n + 1) / 2) + str + "*".repeat(n / 2);
