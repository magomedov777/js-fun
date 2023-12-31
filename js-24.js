//new lesson | monday
//first | easy
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//smart
const goals = (...a) => a.reduce((s, v) => s + v, 0);

//step by step
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  let goals = [laLigaGoals, copaDelReyGoals, championsLeagueGoals];
  return goals.reduce((a, b) => a + b, 0);
}

//50/50
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return [].reduce.call(arguments, (a, b) => a + b);
}

//other
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  laLigaGoals = parseInt(laLigaGoals);
  copaDelReyGoals = parseInt(copaDelReyGoals);
  championsLeagueGoals = parseInt(championsLeagueGoals);
  let result = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return result;
}

//---------------------------------------------------------
//first
function howMuchILoveYou(nbPetals) {
  let x = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  let y = (nbPetals % 6) - 1;
  if (y === -1) {
    y = x.length - 1;
  }
  return x[y];
}

//base
function howMuchILoveYou(nbPetals) {
  let phrase = {
    0: "not at all",
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
  };
  return phrase[nbPetals % 6];
}

//one line
const howMuchILoveYou = (n) => ["not at all", "I love you", "a little", "a lot", "passionately", "madly"][n % 6];

//switch/case
function howMuchILoveYou(nbPetals) {
  switch ((nbPetals - 1) % 6) {
    case 1:
      return "a little";
    case 2:
      return "a lot";
    case 3:
      return "passionately";
    case 4:
      return "madly";
    case 5:
      return "not at all";
    default:
      return "I love you";
  }
}

//while
function howMuchILoveYou(petals) {
  const arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  while (petals > 6) petals -= 6;
  return arr[petals - 1];
}

//good
function howMuchILoveYou(nbPetals) {
  return nbPetals % 6 === 1
    ? "I love you"
    : nbPetals % 6 === 3
    ? "a lot"
    : nbPetals % 6 === 0
    ? "not at all"
    : nbPetals % 6 === 2
    ? "a little"
    : nbPetals % 6 === 5
    ? "madly"
    : nbPetals % 6 === 4
    ? "passionately"
    : "";
}

//--------------------------------------
//sort and star
//first
twoSort = (s) => s.sort()[0].split("").join("***");

//across array
const twoSort = (s) => [...s.sort()[0]].join("***");

//cycle for
function twoSort(s) {
  let last = s.sort()[0];
  let a = last[0];
  for (let i = 1; i < last.length; i++) {
    a += "***" + last[i];
  }
  return a;
}

//reg exp
function twoSort(q) {
  let a = q.sort();
  a = a[0].replace(/(.)(?=.{1,}$)/g, "$1***");
  return a;
}
