//new lesson | sunday
//remove 0 in the end
//first
function noBoringZeros(n) {
  let x = String(n).replace(/0*$/, "");
  let y = +x;
  return y;
}

noBoringZeros = (n) => +String(n).replace(/0*$/, "");

//with cycle while
function noBoringZeros(n) {
  while (n % 10 == 0 && n != 0) {
    n /= 10;
  }
  return n;
}

//with backtick's | interpolation
function noBoringZeros(n) {
  return +`${n}`.replace(/0*$/, "");
}

//Number
function noBoringZeros(n) {
  return Number(String(n).replace(/0+$/, ""));
}

//cycle for
function noBoringZeros(x) {
  let a = `${x}`.split("");
  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] == 0) {
      a.pop();
    } else {
      break;
    }
  }
  return Number(a.join(""));
}

//parseInt | goooooood
const noBoringZeros = (n) => parseInt(n.toString().replace(/0+$/g, "") + 0) / 10;

//not bad
function noBoringZeros(n) {
  return +(n + "").replace(/0*$/, "");
}

//--------------------------------------------------------------------------

//console damage func
//first
function combat(health, damage) {
  if (health > damage) return health - damage;
  if (damage >= health) return 0;
}

//ternary
combat = (health, damage) => (health > damage ? health - damage : 0);

//clever
const combat = (health, damage) => Math.max(0, health - damage);

//across isNaN
function combat(health, damage) {
  if (isNaN(health) || isNaN(damage)) return;
  return health > damage ? health - damage : 0;
}
