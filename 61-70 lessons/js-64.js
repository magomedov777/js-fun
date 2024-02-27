//new lesson | monday
//draw stairs
//first
function drawStairs(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res[i] = `${" ".repeat(i)}I`;
  }
  return res.join("\n");
}

//one line
drawStairs = (n) => [...Array(n)].map((_, i) => " ".repeat(i) + "I").join("\n");

//gooood
function drawStairs(n) {
  return Array(n)
    .fill("I")
    .map((e, i) => e.padStart(i + 1, " "))
    .join("\n");
}

//fun | like
function drawStairs(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    if (i < n) {
      str += " ".repeat(i - 1);
      str += "I".repeat(1);
      str += "\n";
    } else {
      str += " ".repeat(i - 1);
      str += "I".repeat(1);
    }
  }
  return str;
}

//for in for
function drawStairs(n) {
  let res = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        res += "I";
        break;
      } else res += " ";
    }
    if (i === n - 1) continue;
    if (n > 1) res += "\n";
  }
  return res;
}

//----------------------------------------------------------------
//Geometry task, dist between points
//first
function distanceBetweenPoints(a, b) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

//pow | sqrt
function distanceBetweenPoints(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

//step by step
function distanceBetweenPoints(a, b) {
  const x = a.x - b.x;
  const y = a.y - b.y;
  return Math.sqrt(x ** 2 + y ** 2);
}
