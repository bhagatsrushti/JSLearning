console.log(`*****23_arrowFunAssignA.js*****`);

//no argument no return value
console.log(`====step1=======`);
let str = function(){
    console.log(`Good Morning, Today is Thursday`);
}
str();


//3 argument no return value perform multiplication
console.log(`====step2.a=======`);
let mul  = (num1,num2,num3)=>{
    console.log(`multiplication for given values are : 5,5,2`);
    console.log(`Multiplication given  results are three values: ${num1*num2*num3}`);
    }
    mul (5,5,2)

console.log(`********step2.B************`);
const arrowFun2 = (value)=>{
    return `Given value is ${value}`;
};
//invoke some arrow values
const result1  = [arrowFun2(10),arrowFun2(4)];

result1.forEach((result)=> {
console.log(result);
});



//five argument and return values
    console.log(`====step3.a=======`);
    let add = (num1,num2,num3,num4,num5)=>{
        let result =num1+num2+num3+num4+num5
         return result;
       }
      
       let result = add(100,100,200,349,756)
       console.log(`Addition of five number are given: ${result}`);

    //    let arrowFun1 = ()=>{
    //     console.log(`" I am ", " learning ", " ES6 "," features " , "in depth"  `);
    // }
    // arrowFun1();

    console.log(`====step3.b & c=======`);
        // Step 3.c: Invoke arrow function with provided values
        const arrowFunction = (value) => {
          return `${value}`;
        };
      
        const arrowFun1 = [  arrowFunction("I am"), arrowFunction("learning"), arrowFunction("ES6"), arrowFunction("features"), arrowFunction("in depth")];
        console.log(`" I am ", " learning ", " ES6 "," features " , "in depth"  `);
        console.log("Results of arrow function:");
      
        arrowFun1.forEach((item) => {
          console.log(item);
        });
      
       
      