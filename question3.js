const fs = require('fs'),
    readline = require('readline');


const isTriangle = (lengths) => {
  // Triangle has 3 sides.
  if (lengths.length !== 3) {
    return false;
  }
  const biggestSide = Math.max.apply(null, lengths);
  const lengthOfOtherSides = lengths.filter( length => length !== biggestSide)
  const sumOfLengthOfOtherSides = lengthOfOtherSides.reduce((a,b) => a+b, 0);
  // Triangle property longest side less sum of other 2 sides.
  if (sumOfLengthOfOtherSides >= biggestSide ) {
    return true;
  }
  return false;
}

const isSquare = (lengths) => {
  // Square has 4 sides.
  if ( lengths.length !== 4) {
    return false;
  }
  const minLength = Math.min.apply(null, lengths);
  const maxLength = Math.max.apply(null, lengths);
  // all length are same ie, shortest is equal to longest side.
  if (minLength === maxLength) {
    return true;
  }
  return false;
}

const isReactangle = (lengths) => {
  // 4 sides for reactangle.
  if( lengths.length !== 4) {
    return false;
  }
  // sorting so equal sides come together.
  // ie 3,4,3,4 --> 3,3,4,4
  let sortedLength = lengths.sort();
  // ist and 2nd side are equal 3rd and 4th side are equal.
  let isOppsiteSideEqual = ( sortedLength[0] === sortedLength[1] && sortedLength[2] === sortedLength[3]);
  // 1st and 3rd side are not equal.
  let adjustentSideNotEqual = ( sortedLength[0] !== sortedLength[3]);
  //checking.
  if ( isOppsiteSideEqual && adjustentSideNotEqual ){
    return true;
  }
  return false;
}

const rd = readline.createInterface({
    input: fs.createReadStream('q3.txt')
});


rd.on('line', function(line) {
    const arrayOfLength = line.split(',')
    if (isTriangle(arrayOfLength)) {
      console.log(`${arrayOfLength} is a Triangle`);
    } else if (isSquare(arrayOfLength)) {
      console.log(`${arrayOfLength} is a Square`)
    } else if (isReactangle(arrayOfLength)) {
      console.log(`${arrayOfLength} is a Rectangle`)
    } else {
      console.log(`${arrayOfLength} is something else`);
    }
});
