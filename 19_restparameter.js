

//rest parameter is middle or first argument not allowed
function show(n1,n2, ...n) {
   // console.log(arg);// you can use alone
    console.log(n1,n2,n);
    
}
show(100,200,300,400,500);