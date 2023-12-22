//new lesson
//palindrome task
//first
isPalindrome = (x) => x.split("").reverse().join("").toLowerCase() === x.toLowerCase();

//with cycle while
function isPalindrome(x) {
  x = x.toLowerCase();
  let a = 0;
  let b = x.length;
  while (a < b) {
    if (x[a] != x[b - 1]) return false;
    a++;
    b--;
  }
  return true;
}

//good
function isPalindrome(x, str = x.toLowerCase()) {
  return str === [...str].reverse().join("");
}

//with cycle for
function isPalindrome(x) {
  x = x.toLowerCase();
  let y = "";
  for (let i = x.length - 1; i >= 0; i--) {
    y += x[i].toLowerCase();
  }
  return y == x ? true : false;
}

//---------------------------------------------
//language function
//first
function greet(language) {
  if (language === "english") return "Welcome";
  if (language === "czech") return "Vitejte";
  if (language === "danish") return "Velkomst";
  if (language === "dutch") return "Welkom";
  if (language === "estonian") return "Tere tulemast";
  if (language === "finnish") return "Tervetuloa";
  if (language === "flemish") return "Welgekomen";
  if (language === "french") return "Bienvenue";
  if (language === "german") return "Willkommen";
  if (language === "irish") return "Failte";
  if (language === "italian") return "Benvenuto";
  if (language === "latvian") return "Gaidits";
  if (language === "lithuanian") return "Laukiamas";
  if (language === "polish") return "Witamy";
  if (language === "spanish") return "Bienvenido";
  if (language === "swedish") return "Valkommen";
  if (language === "welsh") return "Croeso";
  else return "Welcome";
}

//base
function greet(language) {
  const GreetingsDB = {
      english: "Welcome",
      czech: "Vitejte",
      danish: "Velkomst",
      dutch: "Welkom",
      estonian: "Tere tulemast",
      finnish: "Tervetuloa",
      flemish: "Welgekomen",
      french: "Bienvenue",
      german: "Willkommen",
      irish: "Failte",
      italian: "Benvenuto",
      latvian: "Gaidits",
      lithuanian: "Laukiamas",
      polish: "Witamy",
      spanish: "Bienvenido",
      swedish: "Valkommen",
      welsh: "Croeso",
    },
    defaultLanguage = "english";
  return GreetingsDB[language] || GreetingsDB[defaultLanguage];
}

//switch/case
function greet(language) {
  switch (language) {
    case "english":
      return "Welcome";
    case "czech":
      return "Vitejte";
    case "danish":
      return "Velkomst";
    case "dutch":
      return "Welkom";
    case "estonian":
      return "Tere tulemast";
    case "finnish":
      return "Tervetuloa";
    case "flemish":
      return "Welgekomen";
    case "french":
      return "Bienvenue";
    case "german":
      return "Willkommen";
    case "irish":
      return "Failte";
    case "italian":
      return "Benvenuto";
    case "latvian":
      return "Gaidits";
    case "lithuanian":
      return "Laukiamas";
    case "polish":
      return "Witamy";
    case "spanish":
      return "Bienvenido";
    case "swedish":
      return "Valkommen";
    case "welsh":
      return "Croeso";
    default:
      return "Welcome";
  }
}
