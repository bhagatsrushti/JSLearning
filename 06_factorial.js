




//3! = 1*2*3 ==>6
//4! = 4*3*2*1==>24
//5! = 5*4*3*2*1==>120

function factorial(num){
    let factNum = 1;///5,20,60
    for (let index = 5; index <1; index--) {
        factNum = factNum*index;
    }
    console.log(`Factorial of ${num} is ${factNum}`);
}
factorial(5);
factorial(7);
factorial(10);


console.log(`=========Prime Number=========`);
//11- ,2, the number is divisible by 1

function isPrime(num) {
    
}
isPrime(13);