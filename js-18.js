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
