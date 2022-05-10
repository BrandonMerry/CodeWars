// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    return x.map(n => n * 2);
  } 
   

  const maps = arr => arr.map( x => x * 2 )

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

  function basicOp(operation, value1, value2)
{
 if (operation == '+'){
return value1 + value2;
     }else if(operation == '-'){
   return value1 - value2;
}else if (operation == '*'){
  return value1 * value2;
}else if (operation == '/'){
  return value1 / value2;}
}