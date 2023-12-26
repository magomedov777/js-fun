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
