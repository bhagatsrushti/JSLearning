console.log(`==*===*==*08_arrayAss01.js==*==*`);

console.log(`===*===*===*Step-1 find Even positioned value===*===*====*`);

let arrayNumbers=[22,11,44,55,77,33];
//Wap to find even positioned value

console.log(`Even positioned array elements from array: ${arrayNumbers}`);
console.log(arrayNumbers);
for (let index = 0; index < arrayNumbers.length; index++) {
    if(index%2==0)
    {
        const element = arrayNumbers[index];
        console.log(`${element}`);
    }     
}



console.log(`===*===*===*Step-2 sum of array===*===*====*`);
console.log(`Sum of array elements from array: ${arrayNumbers}`);
var sum=0;
for (let index = 0; index < arrayNumbers.length; index++) {
    {
        sum=sum+arrayNumbers[index];        
    }    
}
console.log(`${sum}`);