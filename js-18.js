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
