//new lesson | friday
//easy debug task | fundamentals
//first
function checkAlive(health) {
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}

checkAlive = (health) => (health <= 0 ? false : true);

//base
function checkAlive(health) {
  return health > 0;
}
