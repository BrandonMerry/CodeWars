// Palindrome strings
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples(Input ==> Output)
// "anna"   ==> true
// "walter" ==> false
// 12321    ==> true
// 123456   ==> false


// arrow function 
isPalindrome = line => String(line) == String(line).split('').reverse().join('');

// normal function 
function isPalindrome(line) {
    return (String(line) == String(line).split('').reverse().join('') )
    
  }

function isPalindrome(line) {
    return (line.toString() == line.toString().split('').reverse().join(''));
  }


// use String  [The String object is used to represent and manipulate a sequence of characters.] to put all character types into string 
// use split - to split the pattern into an array of substrings 
// use reverse - to reverse the array 
// use join - to join the arrays back to one string 

