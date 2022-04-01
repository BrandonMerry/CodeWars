// We need a function that can transform a number into a string. eg 119 -> "119"

function numberToString(num) {
    return num.toString();
  }

  const numberToString = num => `${num}`;

//   Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function boolToWord( bool ){
    if (bool == true){
    return "Yes"} 
    else{
  return "No"}
  }

//   Complete the solution so that it reverses the string passed into it. eg. "car" ->"rac"

function solution(str){
    return str.split('').reverse().join('')
  }