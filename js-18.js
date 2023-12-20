//new lesson
//volume of cuboid
//first
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    let cuboid = length * width * height;
    return cuboid;
  }
}

//base
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height;
  }
}

//with reduce
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return Array.prototype.slice.call(arguments).reduce((a, b) => a * b);
  }
}

//fun
class Kata {
  static getVolumeOfCuboid(l, w, h) {
    const mult = l * w * h;
    return !isNaN(mult) ? mult : "Not-A-Number.";
  }
}

//------------------------------------
//new task
//first
function switchItUp(number) {
  if (number === 0) return "Zero";
  if (number === 1) return "One";
  if (number === 2) return "Two";
  if (number === 3) return "Three";
  if (number === 4) return "Four";
  if (number === 5) return "Five";
  if (number === 6) return "Six";
  if (number === 7) return "Seven";
  if (number === 8) return "Eight";
  if (number === 9) return "Nine";
}

//smart
switchItUp = (n) =>
  ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][n];

//switch/case
function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
    default:
      return "Unknown number";
  }
}
