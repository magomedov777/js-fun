//new lesson | monday
//swap values
//first
function swapValues() {
  return arguments[0].reverse();
}

//base
function swapValues(args) {
  var temp = args[0];
  args[0] = args[1];
  args[1] = temp;
}

//one line
swapValues = (args) => arguments[0].reverse();

//easiest
function swapValues(arr) {
  return arr.reverse();
}

//good
swapValues = (arr) => ([arr[0], arr[1]] = [arr[1], arr[0]]);

//clever
function swapValues(args) {
  args[1] = [args[0], (args[0] = args[1])][0];
}

//like
swapValues = Function.call.bind(Array.prototype.reverse);

//----------------------------------------------------

//new task
//first
var websites = new Array(1000).fill("codewars");

//clever
var websites = [];
while (websites.length < 1000) websites.push("codewars");

//cycle for
var websites = [];
for (i = 0; i < 1000; i++) {
  websites.push("codewars");
}

//not bad
var websites = Array.from({ length: 1000 }, () => "codewars");

//like
var websites = new Array(1000).map(function (e) {
  return "codewars";
});
