
//In js we call function as first class citizen
//1.Function expression
//2.callback
//3.function can return another function


function outer() {
    console.log(`Inside outer function`);
    function inner() {
        console.log(`Inside inner function`);
        
    //     return function () {
    //     console.log(`Inside inner function`);
        
    }
    return inner;
}
outer() ();