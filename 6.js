//write a function that checks if a number is even of odd and return "Even" or "Odd" accordingly

function CheckNumber(number) {
    if (number % 2 == 0) {
        return "Even";
    } else {
       return "Odd";
    }
}

console.log(CheckNumber(3));
