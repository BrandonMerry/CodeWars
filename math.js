// 8kyu     

// create a function that returns a an equation for drinking .5L of water per hour of cycling 

function litres(time) {
    return Math.floor(time * 0.5);
  }

  //Given a year, return the century it is in.

  function century(year) {
    // Finish this :)
    return Math.ceil(year/100)
  }

  const century = year => Math.ceil(year/100)


  // sum the positive components of an array 

  function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
      }
    }
    return total;                         // return total
  }

  function positiveSum(arr) {
    return arr.filter(x => x > 0).reduce((a, b) => a+b, 0);
  }

  // return the negative of a number 

  function makeNegative(num) {
    return Math.abs(num) * -1
 }