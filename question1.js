const a = [ 2, 4, 6, 8, 9, 15];


const PowerOf2 = (elem) => {
  if ( elem === 1) {
    return true;
  } else if ( elem % 2 === 0) {
    return PowerOf2(elem/2);
  }
  return false;
}


/*
 Algorithm:
  2,4,6,8,9,15 -> 2,4,8 ( powers of 2) -> 4,16,64 ( Square Function)
 This is a 2 step process
 1. Filter all power of 2.
 2. Find Square of those numbers.

 Filter 2,4,6,8,9,15 to 2,4,8
 2,4,8 are power of 2 so filter the array based on that.
*/
let x = a.filter(PowerOf2);
/*
Mapping method 4,16,64 are perfect square of 2,4,8
*/
b = x.map(elem => elem**2);

// output
console.log(b);
