// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.



// A) - concatinate the arrays  --> puts 2 arrays into one
// B_)  use reduce to sum the values of the array 



arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((prev,curr) => prev + curr)

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }