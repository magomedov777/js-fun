//new lesson | tuesday
//miles per galon
//first
converter = (mpg) => +((mpg * 1.609344) / 4.54609188).toFixed(2);

//base | across variable
const LITRES_PER_GALLON = 4.54609188;
const KILOMETERS_PER_MILE = 1.609344;
function converter(mpg) {
  return Math.round((100 * mpg * KILOMETERS_PER_MILE) / LITRES_PER_GALLON) / 100;
}

//good
function converter(mpg) {
  return +(mpg * 0.354006043538).toFixed(2);
}

//clever
function converter(mpg) {
  return Math.round(mpg * 35.400604353821375031) / 100;
}

//like
function converter(mpg) {
  return +((mpg * 1.609344) / 4.54609188).toFixed(2);
}

//not bad
function converter(mpg) {
  return Math.round(((mpg * 1.609344) / 4.54609188) * 100) / 100;
}

//parseFloat
function converter(mpg) {
  return parseFloat(((1.609344 / 4.54609188) * mpg).toFixed(2));
}

//---------------------------------------------------------------------------

//base filter
//first
odds = (val) => val.filter((el) => el % 2 === 1);

//base | declaration
function odds(values) {
  return values.filter((v) => v % 2);
}

//good
odds = (values) => values.filter((n) => n % 2 !== 0);

//cycle for
function odds(values) {
  let result = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 !== 0) {
      result.push(values[i]);
    }
  }
  return result;
}

//like that solution
odds = (values) => values.filter((v) => v & 1);
