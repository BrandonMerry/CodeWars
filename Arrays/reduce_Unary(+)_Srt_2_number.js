
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// 1 ) use the reduce method to sum the array into a single value
// 2) use Unary plus(+) to convert an operator to a number 

sumMix = x => x.reduce((prev,curr) => +curr + prev, 0) 

