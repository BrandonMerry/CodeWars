// remove spaces in the string

function noSpace(x){
    return x = x.replace(/\s+/g, '');
   }

//    arrow function 

 noSpace = x => x.replace(/\s+/g, '');


//  repeat a string 

function repeatStr (n, s) {
    return s.repeat(n);
  }

  repeatStr = (n, s) => s.repeat(n)