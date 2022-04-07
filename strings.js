// write a function that returns true if n is divisable by x & y

function isDivisible(n, x, y) {
    return (n % x === 0) && (n % y === 0);
   }


//    Make a function that will return a greeting statement that uses an input;
function greet(name){
    return `Hello, ${name} how are you doing today?`;
  }

  const greet = name => `Hello, ${name} how are you doing today?`;