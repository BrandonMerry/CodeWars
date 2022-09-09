// Write a function to split a string and convert it into an array of words.

// "Robin Singh" ==> ["Robin", "Singh"]


// use .trim() to remove white spaces at the begining and end of a string 

// use .split() to divide into a substring array 

function stringToArray(string){
    return   string.trim().split(" ");
  }
