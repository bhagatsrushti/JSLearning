const PI = 3.14;

export const arrayNum = [11, 22, 33, 44, 55]; // Named Export 

export const sum = (n1, n2) => { // Named Export 
    console.log(` Sum of ${n1} and ${n2} is: ${n1+n2}`);
}

export default PI; // Default export