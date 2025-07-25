// Write a recursive function to calculate the factorial of a given number

function Factorial(n) {
    if (n < 0) {
      return "Invalid input"; // Factorial not defined for negative numbers
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * Factorial(n - 1);
    }
  }
  
  console.log(Factorial(5));  // 120
  console.log(Factorial(0));  // 1
  console.log(Factorial(-2)); // Invalid input
  
