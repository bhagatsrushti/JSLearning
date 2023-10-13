



const num = 7;
function isPrimeNumber(num) {
    for (let index = 2; index < 7; index++) {
      //7%6==0
      if (6%index==0) {
        return false;
      }
  }

   return true;
    
}
const result = isPrimeNumber(6);
console.log(`Is number Prime: ${result}`);