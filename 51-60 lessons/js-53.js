//new lesson | sunday
//first task
//first
billboard = (name, price = 30) => [...new Array(name.length)].fill(price).reduce((a, b) => a + b, 0);

//cycle for
function billboard(name, price = 30) {
  let totalCost = 0;
  for (i = 0; i < name.length; i++) {
    totalCost += price;
  }
  return totalCost;
}

//good
function billboard(name, price = 30) {
  return name.split("").reduce((sum, letter) => sum + price, 0);
}

//like
billboard = (name, price = 30) => +(name.length / (1 / price));

//good
billboard = (name, price = 30) => [...name].reduce((pre) => pre + price, 0);

//repeat
function billboard(name, price = 30) {
  return name.repeat(price).length;
}

//not bad
billboard = (n, p = 30) => n.length / (1 / p);
