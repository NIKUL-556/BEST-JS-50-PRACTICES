// implement a recursive function to find the nth fibonacci number

function fibonacci(n) {
    if (n <= 1) {
        return n
    } else {
        return fibonacci(n-1)+fibonacci(n-2)
    }
}

console.log(fibonacci(5));

-1

