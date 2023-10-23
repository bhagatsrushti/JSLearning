console.log(`***********27_reduceAssign.js********`);
console.log(`=====Step-1======`);
const array_numbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given Array are :[${array_numbers}]`);

let sum = 0;
for (const element of array_numbers) {
    sum = sum + element;
    const arraySum =array_numbers.reduce((runningTotal,value)=>{
 return runningTotal + value;
    })
}
console.log(`Sum of Given Array By using Reduce method :${sum}`);
console.log(`__________________________________________________________`);
console.log(`=====Step-2======`);

const arrayMultiply=array_numbers.filter((value)=>{
    return value%5==0;
    })
    console.log(`Element Which Are Multiple Of "5" ===>>> ${arrayMultiply}`);
    const arrayMultiple5=arrayMultiply.reduce((runningValue,value1)=>{
        return runningValue  + value1
    })
    console.log(`Sum Of Number Multiple Of "5" Using Reduce Method are :${arrayMultiple5}`);
    console.log(`__________________________________________________________`);