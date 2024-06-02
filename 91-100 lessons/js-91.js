//new lesson | thursday
//complementary DNA
//first
function dnaStrand(dna) {
  const char = { A: 'T', T: 'A', C: 'G', G: 'C' }
  return dna.replace(/./g, (x) => char[x])
}

//good
function DNAStrand(dna) {
  return dna.replace(/./g, function (c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

//like
const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' }

function DNAStrand(dna) {
  return dna
    .split('')
    .map(function (v) {
      return pairs[v]
    })
    .join('')
}

//if/else
function DNAStrand(dna) {
  let result = ''
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'A') {
      result += 'T'
    } else if (dna[i] === 'T') {
      result += 'A'
    } else if (dna[i] === 'C') {
      result += 'G'
    } else if (dna[i] === 'G') {
      result += 'C'
    } else {
      result += dna[i]
    }
  }
  return result
}

//switch/case
function DNAStrand(dna) {
  let res = ''
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case 'A':
        res += 'T'
        break
      case 'T':
        res += 'A'
        break
      case 'G':
        res += 'C'
        break
      case 'C':
        res += 'G'
        break
    }
  }
  return res
}

//clever
function DNAStrand(dna) {
  return dna
    .split('')
    .map(function (v) {
      return { A: 'T', T: 'A', C: 'G', G: 'C' }[v]
    })
    .join('')
}

//regEXP
function DNAStrand(dna) {
  return dna
    .replace(/A/g, 't')
    .replace(/T/g, 'a')
    .replace(/C/g, 'g')
    .replace(/G/g, 'c')
    .toUpperCase()
}

//gooooood
DNAStrand = (dna) => dna.replace(/./g, (m) => 'CGAT'['GCTA'.indexOf(m)])

//cycle for
function DNAStrand(dna) {
  let newDNA = ''
  let dnaKeys = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }
  for (let i = 0; i < dna.length; i++) {
    let char = dna[i]
    newDNA += dnaKeys[char]
  }
  return newDNA
}
