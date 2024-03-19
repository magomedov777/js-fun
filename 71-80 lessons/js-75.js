//new lesson | monday
//strange_string
//first
const STRANGE_STRING = 'ß'

//good
STRANGE_STRING = 'oßo'

//ascii
STRANGE_STRING = '\u0130'

//like
STRANGE_STRING = 'ẘeird'

//worked!
STRANGE_STRING = 'ῗ'

//+
STRANGE_STRING = 'İŞ'

//++
STRANGE_STRING = '\uFB00'

//yet
STRANGE_STRING = '\u1FB6'

//-----------------------------------------------------------------------
//validation task
//first
validate = (username, password) =>
  username.includes('||') || password.includes('||')
    ? 'Wrong username or password!'
    : new Database().login(username, password)

//like
function validate(username, password) {
  let valid = new Validator()
  return valid.login(username, escape(password))
}

//encode
function validate(username, password) {
  let database = new Database()
  return database.login(username, encodeURI(password))
}

//for of
function validate(username, password) {
  for (let str of [username, password]) {
    if (/\/\/|\|\|/.test(str)) {
      return 'Wrong username or password!'
    }
  }
  let valid = new Validator()
  return valid.login(username, password)
}

//gooooooood
function validate(username, password) {
  return password.indexOf('||') > -1 || password.indexOf('//') > -1
    ? 'Wrong username or password!'
    : new Database().login(username, password)
}
