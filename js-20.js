//new lesson
//palindrome task
//first
isPalindrome = (x) => x.split("").reverse().join("").toLowerCase() === x.toLowerCase();

//with cycle while
function isPalindrome(x) {
  x = x.toLowerCase();
  let a = 0;
  let b = x.length;
  while (a < b) {
    if (x[a] != x[b - 1]) return false;
    a++;
    b--;
  }
  return true;
}

//good
function isPalindrome(x, str = x.toLowerCase()) {
  return str === [...str].reverse().join("");
}

//with cycle for
function isPalindrome(x) {
  x = x.toLowerCase();
  let y = "";
  for (let i = x.length - 1; i >= 0; i--) {
    y += x[i].toLowerCase();
  }
  return y == x ? true : false;
}
