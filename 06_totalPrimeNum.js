console.log(`Assignment: WAP to count the total prime number from the array.`);
const array = [11, 3, 6, 10, 43, 29, 50];
let result = 0;
function isTotalPrimeNumber(num) {
  for (let index = 2; index < num; index++) {
    if (num % index == 0) {
      return false;
    }
  }
  return true;
}

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  result = isTotalPrimeNumber(element);
  console.log(`Given number is: ${element}
            It is Prime: ${result}`);
}

// const result= isTotalPrimeNumber(11);
// console.log(`given number is 11 :${result}`);
// // console.log(`Is number Prime: `);

//  const result2 =isTotalPrimeNumber(3);
//  console.log(`given number is 3 :${result}`);
// // console.log(`Is number Prime: ${result}`);

// const result3 = isTotalPrimeNumber(6);
// console.log(`given number is 6 :${result}`);

// const result4 = isTotalPrimeNumber(10);
// console.log(`given number is 10 :${result}`);

// const result5 = isTotalPrimeNumber(43);
// console.log(`given number is 43 :${result}`);

// const result6 = isTotalPrimeNumber(29);
// console.log(`given number is 29 :${result}`);

// const result7 = isTotalPrimeNumber(50);
// console.log(`given number is 50 :${result}`);
