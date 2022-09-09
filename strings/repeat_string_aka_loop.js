// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// start with creating a new variable 
// then create a for loop that is less that the parameter n
// use the += (adds the value of the right operand to a variable and assigns the result to the variable) for the new variable 
// return the new variable 

function repeatStr (n, s) {
    let newString = ''
      for(let i = 0; i < n; i++) {
          newString += s
      }
      return newString
  }