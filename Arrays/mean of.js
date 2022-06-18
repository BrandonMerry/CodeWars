// Return the average of the given array rounded down to its nearest integer.

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    var total = 0;
    for(var i = 0; i < marks.length; i++){
      total += marks[i];
    }
    
    /* returns total number of marks divided by number of marks
       rounded down to nearest integer */
    return Math.floor(total / marks.length);
  }