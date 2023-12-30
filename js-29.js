//new lesson | saturday
//5 without numbers
//first
function unusualFive() {
  let arr = [{}, {}, {}, {}, {}];
  return arr.length;
}

//very smart
const unusualFive = () => Math.hypot(Math.ceil(Math.PI), Math.floor(Math.PI));

//good
const unusualFive = () => "one two three four five".split(" ").length;
