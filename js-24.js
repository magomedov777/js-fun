//new lesson | monday
//first | easy
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//smart
const goals = (...a) => a.reduce((s, v) => s + v, 0);
