// if  number = 123456 return [6,5,4,3,2,1]

function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }