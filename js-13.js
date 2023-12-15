//new lesson, thursday
//Area or perimetr

//first
areaOrPerimeter = (l, w) => (l !== w ? (l + w) * 2 : l * w)

//if/else
function areaOrPerimeter(l, w) {
  if (l !== w) {
    return (l + w) * 2
  }
  return l * w
}
