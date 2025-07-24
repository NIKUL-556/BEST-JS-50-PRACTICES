//Write a function that calculates the factorial of a given number

let factorial = (num) => {
    if (num === 0 || num === 1) {
        return 1;
    } else {
       let fect = 1;
       for (let i = 1; i <=num; i++) {
        fect*=i
       }
       return fect
    }


}

console.log(factorial(5));
