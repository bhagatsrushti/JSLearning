//define function inside function
//it can access own
//it can access global
// it can access outer function 
// it is closure
let global = 100;
function outer() {
    let outerVariable = 200;
    let inner = function () {
        let innerVariable = 300;
        console.log(innerVariable,outerVariable,global);
    }
    return inner;
}
//outer()();  
let result = outer();
result();
// console.log(result);